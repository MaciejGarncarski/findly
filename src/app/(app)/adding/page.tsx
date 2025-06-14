import { getSessionUser } from "@/features/auth/api/get-session-user";
import { redirect } from "next/navigation";

export default async function AddingPage() {
  const sessionUser = await getSessionUser();

  if (!sessionUser?.username) {
    redirect("/auth/signin");
  }

  return <p>siemano kolano pl pl pl</p>;
}
