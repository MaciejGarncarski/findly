import { SignJWT, jwtVerify } from "jose";
import { env } from "@/config/env";
import { deleteCookie, setCookie } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";

const accessTokenSecret = env?.ACCESS_TOKEN_SECRET;
const accessEncodedKey = new TextEncoder().encode(accessTokenSecret);

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

type CreateSessionData = {
  userId: string;
};

export const createSession = createServerFn({
  method: "GET",
})
  .validator((data) => data as CreateSessionData)
  .handler(async ({ data }) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const payload = {
      userId: data.userId,
      expiresAt,
    };

    const accessToken = await signAccessToken(payload);

    setCookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
  });

export const deleteSession = createServerFn({
  method: "GET",
}).handler(() => {
  deleteCookie("access_token");
});

export function signAccessToken(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(accessEncodedKey);
}

export async function decryptAccessToken(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<SessionPayload>(
      session,
      accessEncodedKey,
      {
        algorithms: ["HS256"],
      }
    );
    return payload;
  } catch {
    return null;
  }
}
