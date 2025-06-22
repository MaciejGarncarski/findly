import { db } from "@/db/client";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export const deleteListing = createServerFn({ method: "POST" })
  .validator((data: { postId: number }) => {
    return data.postId;
  })
  .handler(async ({ data }) => {
    await db.delete(posts).where(eq(posts.id, data));
    throw redirect({ to: "/browse" });
  });
