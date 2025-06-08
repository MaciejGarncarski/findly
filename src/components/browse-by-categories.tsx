import { Flex, Heading } from "@chakra-ui/react";

export function BrowseByCategory() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      py="20"
      gap="2"
    >
      <Heading as="h3" size={"3xl"}>
        Browse by category
      </Heading>
      <p>Find exactly what you're looking for</p>
    </Flex>
  );
}
