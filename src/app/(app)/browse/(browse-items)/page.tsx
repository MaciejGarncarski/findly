import { BrowsePage } from "@/features/browse/pages/browse";
import { redirect } from "next/navigation";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  if (Array.isArray(params.q) || params.q?.trim() === "") {
    if (params.l) {
      throw redirect(`/browse?l=${params.l}`);
    }

    throw redirect("/browse");
  }

  if (Array.isArray(params.l) || params.l?.trim() === "") {
    if (params.q) {
      throw redirect(`/browse?q=${params.q}`);
    }

    throw redirect("/browse");
  }

  return <BrowsePage />;
}
