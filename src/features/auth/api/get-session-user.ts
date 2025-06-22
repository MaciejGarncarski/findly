import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { decryptAccessToken } from "@/features/auth/api/session";

export type UserData = {
  email: string;
  name: string;
  picture: string | null;
  role: string;
};

export const getSessionUser = createServerFn({ method: "GET" }).handler(
  async (): Promise<UserData | null> => {
    const accessToken = getCookie("access_token");
    const decryptedSessionData = await decryptAccessToken(accessToken);

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
);
