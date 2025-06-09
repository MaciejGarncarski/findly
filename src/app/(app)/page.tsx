"use cache";

import { BrowseByCategory } from "@/features/homepage/components/browse-by-categories";
import { FeaturedList } from "@/features/homepage/components/featured-list";
import { Hero } from "@/features/homepage/components/hero";

import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function Home() {
  cacheLife("hours");

  return (
    <>
      <Hero />
      <BrowseByCategory />
      <FeaturedList />
    </>
  );
}
