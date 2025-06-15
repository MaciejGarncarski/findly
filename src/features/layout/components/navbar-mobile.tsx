import { ColorModeButton } from "@/components/ui/color-mode";
import { UserIndicator } from "@/features/layout/components/user-indicator";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Icon,
  Portal,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavbarMobile() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          <Icon>
            <Menu />
          </Icon>
          <VisuallyHidden>Open menu</VisuallyHidden>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="bg/95" backdropFilter="blur(4px)">
            <Drawer.Header>
              <Drawer.Title>Navigation Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Box as="nav" h="full">
                <VStack
                  as="ul"
                  h="full"
                  fontSize={"2xl"}
                  gap="12"
                  justifyContent={"center"}
                >
                  <Link href={"/"} prefetch={false}>
                    Home
                  </Link>
                  <Link href={"/browse"} prefetch={false}>
                    Browse
                  </Link>
                  <Link href={"/adding"} prefetch={false}>
                    Add Listing
                  </Link>
                </VStack>
              </Box>
            </Drawer.Body>
            <Drawer.Footer>
              <Flex justifyContent={"space-between"} w="full">
                <ColorModeButton />
                <UserIndicator />
              </Flex>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
