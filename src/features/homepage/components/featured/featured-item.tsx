import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import placeholder from "@/assets/placeholder.svg";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export function FeaturedItem() {
  return (
    <Flex
      flexDir={"column"}
      rounded={"2xl"}
      overflow="hidden"
      borderWidth="1px"
      borderColor={"border.subtle"}
      transition={"shadow"}
      transitionDuration={"slow"}
      shadow="lg"
      _hover={{
        shadow: "xl",
      }}
    >
      <Box position={"relative"} h="40" w="full">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={placeholder}
          alt="Test"
        />
      </Box>
      <Flex gap="2" flexDir={"column"} p="4">
        <Flex justifyContent={"space-between"}>
          <Badge variant={"solid"}>Electronics</Badge>
          <Flex gap="1" color="fg.muted" fontSize={"sm"} alignItems={"center"}>
            <Icon size="xs">
              <Calendar />
            </Icon>
            <Text>2 days ago</Text>
          </Flex>
        </Flex>
        <Heading as="h3" fontSize={"lg"}>
          Vintage sofa
        </Heading>
        <Flex gap="1" color="fg.muted" fontSize={"sm"} alignItems={"center"}>
          <Icon size="xs">
            <MapPin />
          </Icon>
          <Text>New York City</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text color="teal.600" fontWeight={"bold"} fontSize={"xl"}>
            $1200
          </Text>

          <Button asChild size="sm" variant={"subtle"} rounded={"full"}>
            <Link href="/browse/itemslug" prefetch={false}>View details</Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
