import { BrowseByCategory } from "@/features/homepage/components/categories/browse-by-categories";
import { CTASection } from "@/features/homepage/components/cta/cta-section";
import { FeaturedList } from "@/features/homepage/components/featured/featured-list";
import { Hero } from "@/features/homepage/components/hero/hero";

export function HomePage() {
  return (
    <>
      <Hero />
      <BrowseByCategory />
      <FeaturedList />
      <CTASection />
    </>
  );
}
