"use server";
import "server-only";

import { cookies } from "next/headers";
import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { decryptAccessToken } from "@/features/auth/api/session";
import { cache } from "react";

export const getSessionUser = cache(async () => {
  console.log("getSessionUser", Math.random());

  const cookieStore = await cookies();
  const sessionValue = cookieStore.get("access_token")?.value;
  const decryptedSessionData = await decryptAccessToken(sessionValue);

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
)