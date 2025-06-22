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
import { Link } from "@tanstack/react-router";

export function NavbarMobile() {
  return (
    <Drawer.Root placement={"bottom"}>
      <Drawer.Trigger asChild>
        <Button variant="ghost" size="sm">
          <Icon>
            <Menu />
          </Icon>
          <VisuallyHidden>Open menu</VisuallyHidden>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            bg="bg/95"
            roundedTop={"l3"}
            backdropFilter="blur(4px)"
          >
            <Drawer.Header>
              <Drawer.Title>Navigation Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Box as="nav" h="full">
                <VStack
                  as="ul"
                  h="full"
                  fontSize={"md"}
                  gap="4"
                  alignItems={"start"}
                  justifyContent={"center"}
                >
                  <Link to={"/"}>Home</Link>
                  <Link to={"/"}>Browse</Link>
                  <Link to={"/"}>Add Listing</Link>
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
