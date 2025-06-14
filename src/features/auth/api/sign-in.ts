"use server";

import { createSession } from "@/features/auth/api/session";
import { redirect } from "next/navigation";

export async function signIn(callbackURL: string | string[] | undefined) {
  await createSession(123);

  if (callbackURL && !Array.isArray(callbackURL)) {
    void redirect(callbackURL);
  }

  redirect("/");
}
