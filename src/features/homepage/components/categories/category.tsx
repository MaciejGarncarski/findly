import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Props = {
  category: string;
  title: string;
  color: string;
  listings: number;
  icon: LucideIcon;
};

export function Category({
  category,
  color,
  listings,
  title,
  icon: ReactIcon,
}: Props) {
  return (
    // <Link to={`/browse?c=${category}`}>
    <Link to="/browse">
      <Flex
        bg="bg"
        mx="auto"
        w="10rem"
        h="8rem"
        lg={{
          w: "15rem",
          gap: "1",
          h: "10rem",
        }}
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
          <Icon size={{ lg: "xl", base: "lg" }}>
            <ReactIcon />
          </Icon>
        </Box>
        <Heading as="h3" fontSize={"md"} lg={{ mt: "2" }}>
          {title}
        </Heading>
        <Text color={"fg.muted"} fontSize={"sm"}>
          {listings} listings
        </Text>
      </Flex>
    </Link>
  );
}
