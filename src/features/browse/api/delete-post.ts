"use server";

import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function deleteListing(postId: number) {
  await db.delete(posts).where(eq(posts.id, postId));
}
