import { Logo } from "@/components/ui/logo";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Separator,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Facebook, Instagram, Mail, PhoneCallIcon, XIcon } from "lucide-react";

const socials = [
  { name: "X", icon: XIcon, path: "#" },
  { name: "LinkedIn", icon: Instagram, path: "#" },
  { name: "Facebook", icon: Facebook, path: "#" },
];

const quickLinks = [
  {
    href: "#",
    title: "Browse Listings",
  },
  {
    href: "#",
    title: "Post an Ad",
  },
  {
    href: "#",
    title: "Safety Tips",
  },
  {
    href: "#",
    title: "Help Center",
  },
];

const contactInfo = [
  {
    icon: Mail,
    text: "mail@example.com",
  },
  {
    icon: PhoneCallIcon,
    text: "+48 000-000-000",
  },
];

export function Footer() {
  return (
    <Box
      as="footer"
      bg="teal.800"
      color="gray.300"
      py="10"
      px="10"
      lg={{ px: "2vw" }}
    >
      <Flex
        gap="8"
        mx="auto"
        flexDir={"column"}
        lg={{ maxW: "6xl", flexDir: "column" }}
      >
        <Box
          display="flex"
          flexDir={"column"}
          lg={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
          gap="8"
        >
          <Flex
            flexDir={"column"}
            gap="4"
            lg={{ gap: "4", gridColumn: "span 2" }}
          >
            <Box w="5rem">
              <Logo />
            </Box>
            <Text lg={{ maxW: "28rem" }}>
              The easiest way to buy and sell locally. Connect with people in
              your community and find great deals on everything you need.
            </Text>
            <Flex gap="4">
              {socials.map(({ icon: IconElement, name, path }) => {
                return (
                  <Link
                    key={name}
                    rounded="lg"
                    color="teal.500"
                    p="2"
                    _hover={{ bg: "teal.700" }}
                    href={path}
                  >
                    <Icon size="md">
                      <IconElement />
                    </Icon>
                  </Link>
                );
              })}
            </Flex>
          </Flex>
          <Separator lg={{ display: "none" }} borderColor="teal" />
          <Flex flexDir={"column"} gap="4">
            <Heading as="h3">Quick Links</Heading>
            <Box as="ul" display={"flex"} flexDir={"column"} gap="1">
              {quickLinks.map(({ href, title }) => {
                return (
                  <Box as={"li"} key={title}>
                    <Text asChild>
                      <NextLink href={href}>{title}</NextLink>
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Flex>

          <Separator lg={{ display: "none" }} borderColor="teal" />
          <Flex flexDir={"column"} gap="4">
            <Heading as="h3">Contact Us</Heading>
            <Box as="ul" display={"flex"} flexDir={"column"} gap="1">
              {contactInfo.map(({ icon: ContactIcon, text }) => {
                return (
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="2"
                    as={"li"}
                    key={text}
                  >
                    <Icon size="sm">
                      <ContactIcon />
                    </Icon>
                    <Text>{text}</Text>
                  </Box>
                );
              })}
            </Box>
          </Flex>
        </Box>
        <Separator borderColor="teal" />
        <Flex>
          <Text fontSize={"xs"}>© 2025 Findly. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
