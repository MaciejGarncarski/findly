import { AddListing } from "@/features/add-listing/pages/add-listing";
import { getSessionUser } from "@/features/auth/api/get-session-user";
import { redirect } from "next/navigation";

export default async function AddingPage() {
  const sessionUser = await getSessionUser();

  if (!sessionUser?.username) {
    redirect("/auth/signin");
  }

  return <AddListing />;
}
