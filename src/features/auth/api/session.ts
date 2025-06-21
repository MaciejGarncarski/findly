import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { env } from "@/config/env";

const accessTokenSecret = env?.ACCESS_TOKEN_SECRET;
const accessEncodedKey = new TextEncoder().encode(accessTokenSecret);

type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

type CreateSessionData = {
  userId: string;
};

export async function createSession(data: CreateSessionData) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const payload = {
    userId: data.userId,
    expiresAt,
  };

  const accessToken = await signAccessToken(payload);

  const cookieStore = await cookies();

  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

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
