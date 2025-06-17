import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const statsData = [
  {
    value: "2M+",
    title: "Active Users",
  },
  {
    value: "500K+",
    title: "Items Sold",
  },
  {
    value: "50+",
    title: "Cities",
  },
];

export function CTASection() {
  return (
    <VStack
      py="14"
      color="fg.inverted"
      minH="30rem"
      bgGradient="to-r"
      textAlign={"center"}
      gradientFrom="teal.500"
      gradientTo="blue.400"
      _dark={{
        gradientFrom: "teal.300",
        gradientTo: "blue.300",
      }}
      gap="8"
      px="6"
      lg={{
        py: "20",
      }}
    >
      <Heading fontSize={"3xl"} as="h2">
        Ready to Sell Your Items?
      </Heading>
      <Text fontSize={"xl"} maxW="28rem" textWrap={"pretty"}>
        Join thousands of sellers and reach buyers in your area. Posting is
        quick, easy, and free!
      </Text>
      <Flex gap="4" flexDir={"column"} lg={{ flexDir: "row", gap: "8" }}>
        <Button asChild variant={"subtle"} rounded="full" size="xl">
          <Link href="/adding">Post Your First Ad</Link>
        </Button>
        <Button asChild variant={"solid"} rounded="full" size="xl">
          <Link href="/browse">Browse items</Link>
        </Button>
      </Flex>
      <Flex flexDir={"column"} gap="8" lg={{ flexDir: "row" }}>
        {statsData.map(({ title, value }) => {
          return (
            <Flex
              key={title}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              lg={{ width: "15rem" }}
            >
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                {value}
              </Text>
              <Text>{title}</Text>
            </Flex>
          );
        })}
      </Flex>
    </VStack>
  );
}
