import { Logo } from "@/components/ui/logo";
import { Box, Flex, Icon, Link, Separator, Text } from "@chakra-ui/react";
import { Facebook, Instagram, XIcon } from "lucide-react";

const socials = [
  { name: "X", icon: XIcon, path: "#" },
  { name: "LinkedIn", icon: Instagram, path: "#" },
  { name: "Facebook", icon: Facebook, path: "#" },
];

export function Footer() {
  return (
    <Box
      as="footer"
      bg="teal.800"
      color={"teal.subtle/80"}
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
        <Flex>
          <Flex direction={"column"} gap="4" lg={{ maxW: "1/3", gap: "4" }}>
            <Box w="5rem">
              <Logo />
            </Box>
            <Text color={"teal.subtle/80"}>
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
        </Flex>
        <Separator borderColor="teal.700" />
        <Flex>
          <Text fontSize={"sm"} color="gray.300">
            © 2025 Findly. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
