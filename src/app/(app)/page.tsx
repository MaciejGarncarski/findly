import { BrowseByCategory } from "@/features/homepage-categories/components/browse-by-categories";
import { FeaturedList } from "@/features/homepage-featured/components/featured-list";
import { Hero } from "@/features/homepage-hero/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <BrowseByCategory />
      <FeaturedList />
    </>
  );
}
