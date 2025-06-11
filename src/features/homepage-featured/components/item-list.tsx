import { FeaturedItem } from "@/features/homepage-featured/components/featured-item";
import { Box } from "@chakra-ui/react";

export function ItemList() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={"1fr"}
      gap="8"
      lg={{
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </Box>
  );
}
