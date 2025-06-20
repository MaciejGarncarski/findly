import { ItemPage } from "@/features/item-page/pages/item-page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const searchParams = await params;

  return <ItemPage id={Number(searchParams.id)} />;
}
