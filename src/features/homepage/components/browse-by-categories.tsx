import { Categories } from "@/features/homepage/components/categories";
import { Flex, Heading, Skeleton, Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";

export async function BrowseByCategory() {
  return (
    <VStack bg="bg.muted" py="20" gap="16">
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        gap="2"
      >
        <Heading as="h3" size={"3xl"}>
          Browse by category
        </Heading>
        <Text color="fg.muted" fontSize={"lg"}>
          Find exactly what you&apos;re looking for
        </Text>
      </Flex>
      <Suspense
        fallback={
          <Flex mx="auto" gap="8">
            <Skeleton w="14rem" h="10rem" rounded={"xl"} />
            <Skeleton w="14rem" h="10rem" rounded={"xl"} />
            <Skeleton w="14rem" h="10rem" rounded={"xl"} />
            <Skeleton w="14rem" h="10rem" rounded={"xl"} />
          </Flex>
        }
      >
        <Categories />
      </Suspense>
    </VStack>
  );
}
