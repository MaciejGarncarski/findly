"use server";
import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/features/auth/api/session";

export async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get("session")?.value;

  const decryptedSessionData = await decrypt(sessionValue);

  if (sessionValue) {
    return {
      username: decryptedSessionData?.name,
      email: decryptedSessionData?.email,
      picture: decryptedSessionData?.picture,
      name: decryptedSessionData?.name,
    };
  }

  return null;
}
