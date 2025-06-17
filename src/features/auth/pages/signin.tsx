"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export function SignIn({
  callbackURL,
}: {
  callbackURL: string | string[] | undefined;
}) {
  return (
    <Flex flexDir={"column"} gap="4" alignItems={"center"}>
      <Heading as="h1">Sign in</Heading>
      <Button asChild>
        <Link href={`/api/auth/google?appCbUrl=${callbackURL || "/"}`}>
          Continue with Google
        </Link>
      </Button>
    </Flex>
  );
}
