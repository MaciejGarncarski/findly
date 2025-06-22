import { db } from "@/db/client";
import { posts } from "@/db/schema";
import { BrowsePage } from "@/features/browse/pages/browse";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export const Route = createFileRoute("/_app/browse/")({
  component: BrowsePage,
  loader: async () => {
    try {
      const items = await getItems();

      return { items };
    } catch (error) {
      return {
        items: null,
      };
    }
  },
});

const getItems = createServerFn().handler(async () => {
  const items = await db.select({ id: posts.id }).from(posts);

  return items;
});
