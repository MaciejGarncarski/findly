import { redirect } from "next/navigation";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  if (Array.isArray(params.q) || params.q?.trim() === "") {
    if (params.l) {
      throw redirect(`/search?l=${params.l}`);
    }

    throw redirect("/search");
  }

  if (Array.isArray(params.l) || params.l?.trim() === "") {
    if (params.q) {
      throw redirect(`/search?q=${params.q}`);
    }

    throw redirect("/search");
  }

  return (
    <>
      {JSON.stringify(params)}
      <p>Im search</p>
    </>
  );
}
