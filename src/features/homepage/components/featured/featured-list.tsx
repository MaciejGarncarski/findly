import { ItemList } from "@/features/homepage/components/featured/item-list";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

export function FeaturedList() {
  return (
    <Flex
      flexDir={"column"}
      maxW="6xl"
      mx="auto"
      minH={"40rem"}
      gap="10"
      py="16"
      px="6"
      lg={{
        px: 0,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex flexDir="column">
          <Heading as="h2" fontSize={"3xl"} fontWeight={"bold"}>
            Featured Listings
          </Heading>
          <Text color="fg.muted" fontSize={"lg"} mt="4">
            Hand-picked deals you don&apos;t want to miss
          </Text>
        </Flex>

        <Button asChild variant={"outline"} rounded="full" size="lg">
          <Link to="/browse">View all</Link>
        </Button>
      </Box>
      <ItemList />
    </Flex>
  );
}
