import { Category } from "@/features/homepage/components/category";
import { Flex } from "@chakra-ui/react";

import { IconType } from "react-icons";
import {
  BsFillBriefcaseFill,
  BsHouse,
  BsPhone,
  BsWrench,
} from "react-icons/bs";

type Categories = {
  title: string;
  category: string;
  color: string;
  icon: IconType;
}[];

const featuredCategories = [
  {
    category: "job",
    color: "blue",
    title: "Jobs",
    icon: BsFillBriefcaseFill,
  },
  {
    category: "real-estate",
    color: "green",
    title: "Real estate",
    icon: BsHouse,
  },
  {
    category: "service",
    color: "purple",
    title: "Services",
    icon: BsWrench,
  },
  {
    category: "electronics",
    color: "orange",
    title: "Electronics",
    icon: BsPhone,
  },
] satisfies Categories;

async function getListings(): Promise<Record<string, number>> {
  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, 3000);
  });

  return {
    job: 187,
    "real-estate": 527,
    service: 231,
    electronics: 382,
  };
}

export async function Categories() {
  const listings = await getListings();

  return (
    <Flex mx="auto" gap="8">
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
