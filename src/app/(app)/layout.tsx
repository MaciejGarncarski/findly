import { Button, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import "../globals.css";
import Link from "next/link";
import { ColorModeButton } from "@/components/ui/color-mode";
import Image from "next/image";
import logo from "@/assets/logo.png";

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
        p="4"
        pos="sticky"
        top="0"
        backdropFilter="auto"
        backdropBlur="2xl"
        bg="bg/80"
        alignItems={"center"}
        xl={{
          height: "16",
          px: "10rem",
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
          <Button asChild variant="surface" rounded={"lg"} size="sm">
            <Link href="/auth/signin">Sign in</Link>
          </Button>
        </Flex>
      </Flex>
      {children}
    </>
  );
}
