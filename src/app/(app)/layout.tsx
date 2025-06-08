import { Button, Flex, Heading } from "@chakra-ui/react";
import "../globals.css";
import Link from "next/link";
import { ColorModeButton } from "@/components/ui/color-mode";

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
        bg="whiteAlpha.300"
        alignItems={"center"}
      >
        <Heading as="h1">Header</Heading>
        <ColorModeButton />

        <Button asChild rounded={"xl"} size="xs" ml="auto">
          <Link href="/auth/signin">Sign in</Link>
        </Button>
      </Flex>
      {children}
    </>
  );
}
