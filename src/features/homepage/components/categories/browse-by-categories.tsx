import { Categories } from "@/features/homepage/components/categories/categories";
import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import { Suspense } from "react";

const CategorySkeleton = () => (
  <Skeleton
    w="10rem"
    h="8rem"
    rounded={"xl"}
    lg={{
      w: "15rem",
      h: "10rem",
    }}
  />
);
export function BrowseByCategory() {
  return (
    <Box bg="bg.muted">
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="10"
        py="12"
        maxW="6xl"
        mx="auto"
        lg={{
          py: "24",
          gap: "16",
        }}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          gap="2"
        >
          <Heading as="h3" size={"3xl"} fontWeight={"bold"}>
            Browse by Category
          </Heading>
          <Text color="fg.muted" fontSize={"lg"}>
            Find exactly what you&apos;re looking for
          </Text>
        </Flex>
        <Suspense
          fallback={
            <Box
              display="grid"
              gridTemplateColumns={"1fr 1fr"}
              gap="4"
              lg={{
                gap: "8",
              }}
              xl={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
            </Box>
          }
        >
          <Categories />
        </Suspense>
      </Flex>
    </Box>
  );
}
