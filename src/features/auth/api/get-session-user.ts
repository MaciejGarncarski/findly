"use server";
import "server-only";

import { cookies } from "next/headers";

export async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get("session")?.value;

  if (sessionValue) {
    return {
      username: "user-212",
      email: "email@email.com",
    };
  }

  return null;
}
