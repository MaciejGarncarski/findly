import { ItemPage } from "@/features/item-page/pages/item-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/browse/$itemId")({
  component: ItemPage,
});
