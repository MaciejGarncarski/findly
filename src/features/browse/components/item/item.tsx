import { Badge, Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

import placeholder from "@/assets/placeholder.svg";
import { Link } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";

type Props = {
  id: number;
};

export function Item({ id }: Props) {
  const itemId = id.toString();

  return (
    <Box
      asChild
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Link to={`/browse/$itemId`} params={{ itemId }}>
        <Flex
          flexDir={"column"}
          rounded={"2xl"}
          overflow="hidden"
          borderWidth="1px"
          borderColor={"border.subtle"}
          transition={"shadow"}
          transitionDuration={"slow"}
          shadow="lg"
          w={"19rem"}
          minH="15rem"
          _hover={{
            shadow: "xl",
          }}
        >
          <Box position={"relative"} h="40" w="full" overflow={"hidden"}>
            <Box asChild objectFit={"cover"} h="full" w="full">
              <img src={placeholder} alt="Test" />
            </Box>
          </Box>
          <Flex gap="2" flexDir={"column"} p="4">
            <Flex justifyContent={"space-between"}>
              <Badge variant={"solid"}>Electronics</Badge>
              <Flex
                gap="1"
                color="fg.muted"
                fontSize={"sm"}
                alignItems={"center"}
              >
                <Icon size="xs">
                  <Calendar />
                </Icon>
                <Text>2 days ago</Text>
              </Flex>
            </Flex>
            <Heading as="h3" fontSize={"lg"}>
              Vintage sofa
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text color="teal.600" fontWeight={"bold"} fontSize={"xl"}>
                $1200
              </Text>
            </Flex>
            <Flex
              gap="1"
              color="fg.muted"
              fontSize={"sm"}
              alignItems={"center"}
            >
              <Icon size="xs">
                <MapPin />
              </Icon>
              <Text>New York City</Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}
