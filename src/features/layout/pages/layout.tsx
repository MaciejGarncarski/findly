import { Footer } from "@/components/footer";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
import logo from "@/assets/logo.png";
import { NavbarDesktop } from "@/features/layout/components/navbar-desktop";
import { UserIndicator } from "@/features/layout/components/user-indicator";
import { AddListingLink } from "@/features/add-listing/components/add-listing-link";
import { NavbarMobile } from "@/features/layout/components/navbar-mobile";

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
        bg="bg/90"
        shadow="md"
        backdropFilter="blur(10px)"
        alignItems={"center"}
        xl={{
          height: "16",
          px: "8rem",
        }}
      >
        <Heading as="h1">
          <Link href="/">
            <Image src={logo} alt="Findly" width={80} height={50} />
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
            <Suspense fallback={<p>loading</p>}>
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
