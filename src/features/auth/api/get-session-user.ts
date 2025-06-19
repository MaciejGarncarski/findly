"use server";
import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/features/auth/api/session";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get("session")?.value;

  const decryptedSessionData = await decrypt(sessionValue);

  if (!decryptedSessionData) {
    return null;
  }

  try {
    const [user] = await db
      .select({
        email: users.email,
        name: users.name,
        picture: users.picture,
        role: users.role,
      })
      .from(users)
      .where(eq(users.id, decryptedSessionData?.userId));

    return {
      role: user.role,
      email: user?.email,
      picture: user?.picture,
      name: user?.name,
    };
  } catch {
    return null;
  }
}
