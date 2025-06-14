"use server";

import { deleteSession } from "@/features/auth/api/session";
import { revalidatePath } from "next/cache";

export async function signOut() {
  await deleteSession();
  revalidatePath("/(app)");
}
