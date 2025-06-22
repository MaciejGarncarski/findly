import { Footer } from "@/components/footer";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, Heading, Skeleton, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode, Suspense } from "react";
import logo from "@/assets/logo.png";
import { NavbarDesktop } from "@/features/layout/components/navbar-desktop";
import { UserIndicator } from "@/features/layout/components/user-indicator";
import { AddListingLink } from "@/features/add-listing/components/add-listing-link";
import { NavbarMobile } from "@/features/layout/components/navbar-mobile";
import { Link } from "@tanstack/react-router";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Flex
        width="full"
        height="12"
        zIndex={10}
        p="4"
        pos="sticky"
        top="0"
        bg="bg/95"
        borderBottom={"1px solid"}
        borderColor={"border"}
        shadow={"xl"}
        backdropFilter="blur(20px)"
        alignItems={"center"}
        xl={{
          height: "16",
          px: "8rem",
        }}
      >
        <Heading as="h1">
          <Link to="/">
            <img src={logo} alt="Findly" width={80} height={50} />
            <VisuallyHidden>Findly</VisuallyHidden>
          </Link>
        </Heading>
        <Box ml="auto" hideFrom={"lg"}>
          <NavbarMobile />
        </Box>
        <Box ml="auto" hideBelow={"lg"}>
          <Flex gap="8" alignItems={"center"}>
            <NavbarDesktop />
            <ColorModeButton />
            <Suspense fallback={<Skeleton h="8" w="16" />}>
              <UserIndicator />
            </Suspense>
            <AddListingLink />
          </Flex>
        </Box>
      </Flex>
      <Box minH="38rem">{children}</Box>
      <Footer />
    </>
  );
}
