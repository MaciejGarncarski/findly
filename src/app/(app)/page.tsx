import { BrowseByCategory } from "@/features/homepage/components/browse-by-categories";
import { FeaturedList } from "@/features/homepage/components/featured-list";
import { Hero } from "@/features/homepage/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <BrowseByCategory />
      <FeaturedList />
    </>
  );
}
