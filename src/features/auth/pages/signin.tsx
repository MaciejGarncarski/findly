"use client";

import { signIn } from "@/features/auth/api/sign-in";
import { Button, Flex, Heading } from "@chakra-ui/react";

export function SignIn({
  callbackURL,
}: {
  callbackURL: string | string[] | undefined;
}) {
  return (
    <Flex flexDir={"column"} gap="4" alignItems={"center"}>
      <Heading as="h1">Sign in</Heading>
      <Button onClick={() => signIn(callbackURL)}>Continue with Google</Button>
    </Flex>
  );
}
