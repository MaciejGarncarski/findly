import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  category: string;
  title: string;
  color: string;
  listings: number;
  icon: IconType;
};

export function Category({
  category,
  color,
  listings,
  title,
  icon: ReactIcon,
}: Props) {
  return (
    <Link href={`/search?c=${category}`}>
      <Flex
        bg="bg"
        w="14rem"
        h="10rem"
        gap="1"
        shadow={"xs"}
        _hover={{ shadow: "lg" }}
        transition={"shadow"}
        transitionDuration={"slow"}
        rounded="xl"
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          rounded="xl"
          bg={`${color}.100`}
          color={`${color}.600`}
          _dark={{ color: `${color}.700` }}
          p="4"
        >
          <Icon size="xl">
            <ReactIcon />
          </Icon>
        </Box>
        <Heading as="h3" fontSize={"md"} mt="2">
          {title}
        </Heading>
        <Text color={"fg.muted"} fontSize={"sm"}>
          {listings} listings
        </Text>
      </Flex>
    </Link>
  );
}
