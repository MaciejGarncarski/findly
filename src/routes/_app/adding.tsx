import { AddListing } from "@/features/add-listing/pages/add-listing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/adding")({
  component: AddListing,
});
