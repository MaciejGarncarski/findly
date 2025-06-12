import { Box, Button, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import Link from "next/link";
import { ColorModeButton } from "@/components/ui/color-mode";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Footer } from "@/components/footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Flex ml="auto" gap="4">
          <ColorModeButton />
          <Button asChild variant="subtle" rounded={"lg"} size="sm">
            <Link href="/auth/signin">Sign in</Link>
          </Button>
        </Flex>
      </Flex>
      <Box minH="38rem">{children}</Box>
      <Footer />
    </>
  );
}
