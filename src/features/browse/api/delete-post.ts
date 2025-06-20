"use server";

import { db } from "@/db/client";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function deleteListing(postId: number) {
  await db.delete(posts).where(eq(posts.id, postId));
  redirect("/browse");
}
