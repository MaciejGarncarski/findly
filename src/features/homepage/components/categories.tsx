import { Category } from "@/features/homepage/components/category";
import { Flex } from "@chakra-ui/react";
import { Briefcase, House, LucideIcon, Smartphone, Wrench } from "lucide-react";
import { unstable_cacheLife, unstable_cacheTag } from "next/cache";

type Categories = {
  title: string;
  category: string;
  color: string;
  icon: LucideIcon;
}[];

const featuredCategories = [
  {
    category: "job",
    color: "blue",
    title: "Jobs",
    icon: Briefcase,
  },
  {
    category: "real-estate",
    color: "green",
    title: "Real estate",
    icon: House,
  },
  {
    category: "service",
    color: "purple",
    title: "Services",
    icon: Wrench,
  },
  {
    category: "electronics",
    color: "orange",
    title: "Electronics",
    icon: Smartphone,
  },
] satisfies Categories;

async function getListings(): Promise<Record<string, number>> {
  "use cache";
  unstable_cacheTag("categories-homepage");
  unstable_cacheLife({
    stale: 600_000,
    revalidate: 600_000 * 6,
    expire: 600_000 * 6 * 2,
  });

  return {
    job: Math.floor(Math.random() * 100),
    "real-estate": Math.floor(Math.random() * 300),
    service: Math.floor(Math.random() * 200),
    electronics: Math.floor(Math.random() * 400),
  };
}

export async function Categories() {
  const listings = await getListings();

  return (
    <Flex gap="8" direction={"column"} lg={{ flexDir: "row" }}>
      {featuredCategories.map(({ category, color, title, icon }) => {
        return (
          <Category
            key={title}
            icon={icon}
            category={category}
            color={color}
            title={title}
            listings={listings[category]}
          />
        );
      })}
    </Flex>
  );
}
