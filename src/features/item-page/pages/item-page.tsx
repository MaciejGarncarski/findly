import { Box, Breadcrumb, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import Link from "next/link";

export function ItemPage() {
  return (
    <Box maxW="6xl" mx="auto" py="10" px="6" lg={{ px: 0 }}>
      <Stack>
        <Breadcrumb.Root size={"lg"}>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href="/">Home</Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href="/browse">Browse</Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Item [slug]</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Stack>

      <Box bg="bg.muted" p="2" rounded={"xl"}>
        <Box position={"relative"} h="20rem" rounded={"xl"} overflow={"hidden"}>
          <Image src={placeholder} fill alt="" />
        </Box>
        <Flex>
          <p>test</p>
        </Flex>
      </Box>

      <Text>elo</Text>
    </Box>
  );
}
