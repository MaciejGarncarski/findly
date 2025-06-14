import {
  Button,
  CloseButton,
  Drawer,
  Icon,
  Portal,
  VisuallyHidden,
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
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Navigation Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <nav>
                <ul>
                  <Link href={"/"} prefetch={false}>
                    Home
                  </Link>
                  <Link href={"/browse"} prefetch={false}>
                    Browse
                  </Link>
                  <Link href={"/adding"} prefetch={false}>
                    Add Listing
                  </Link>
                </ul>
              </nav>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
