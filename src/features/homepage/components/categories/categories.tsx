import { db } from "@/db/client";
import { categories } from "@/db/schema";
import { Category } from "@/features/homepage/components/categories/category";
import { Box } from "@chakra-ui/react";
import { Briefcase, House, LucideIcon, Smartphone, Wrench } from "lucide-react";

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
  const categoriesData = await db.select({name: categories.name}).from(categories).limit(4);


  console.log(categoriesData);


  return {
    job: 200,
    "real-estate": 100,
    service: 300,
    electronics: 222,
  };
}

export async function Categories() {
  await new Promise((res) => setTimeout(res, 1500));
  const listings = await getListings();

  return (
    <Box
      display="grid"
      gridTemplateColumns={"1fr 1fr"}
      gap="4"
      placeContent={"center"}
      lg={{
        gap: "8",
      }}
      xl={{ gridTemplateColumns: "repeat(4, 1fr)" }}
    >
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
    </Box>
  );
}
