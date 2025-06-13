"use server";

import { createSession } from "@/features/auth/api/session";
import { redirect } from "next/navigation";

export async function signIn() {
  await createSession(123);
  redirect("/");
}
