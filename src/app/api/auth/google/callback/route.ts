import { env } from "@/config/env";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { createSession } from "@/features/auth/api/session";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { z } from "zod/v4";

const googleOauthAccessTokenSchema = z.object({
  access_token: z.string(),
});

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const parsedState = state ? JSON.parse(state) : null;

  if (!code) {
    return new Response(JSON.stringify({ error: "no code provided" }), {
      status: 400,
    });
  }

  const bodyData = {
    code: code,
    client_id: env?.GOOGLE_CLIENT_ID,
    client_secret: env?.GOOGLE_CLIENT_SECRET,
    redirect_uri: env?.GOOGLE_CALLBACK_URL,
    grant_type: "authorization_code",
  };

  const response = await fetch(env?.GOOGLE_ACCESS_TOKEN_URL || "", {
    method: "POST",
    body: JSON.stringify(bodyData),
  });
  const access_token_data = await response.json();

  const parsedTokenData =
    googleOauthAccessTokenSchema.safeParse(access_token_data);

  if (parsedTokenData.error) {
    return new Response(JSON.stringify({ error: "schema parsing failed" }), {
      status: 400,
    });
  }

  const { email, name, picture } = await getUserInfo({
    accessToken: parsedTokenData.data.access_token,
  });

  const user = await db
    .select({ email: usersTable.email, id: usersTable.id })
    .from(usersTable)
    .limit(1);

  const doUserExist = Boolean(user[0].email);

  if (!doUserExist) {
    const insertedData = await db
      .insert(usersTable)
      .values({
        email,
        name,
        picture,
      })

      .returning({ insertedId: usersTable.id });

    await createSession({
      userId: insertedData[0].insertedId,
    });
  }

  if (doUserExist) {
    await createSession({
      userId: user[0].id,
    });
  }

  if (parsedState.appCbUrl) {
    redirect(parsedState.appCbUrl);
  }

  redirect("/");
}

type GetUserInfoData = {
  accessToken: string;
};

export async function getUserInfo({ accessToken }: GetUserInfoData) {
  const userInfoResponse = await fetch(
    ` https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
  );
  const userInfo = await userInfoResponse.json();
  const parsedUserInfo = googleOauthResponseSchema.safeParse(userInfo);

  if (!parsedUserInfo.success) {
    const errorMessages = parsedUserInfo.error.issues.map(
      (issue: z.core.$ZodIssue) => {
        return issue.path.map((el) => el.toString());
      }
    );

    throw new Error(errorMessages.toString());
  }

  return parsedUserInfo.data;
}

export const googleOauthResponseSchema = z.object({
  picture: z.string(),
  email: z.email(),
  name: z.string(),
  id: z.string(),
});
