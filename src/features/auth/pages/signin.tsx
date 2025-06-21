"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SignIn() {
  const params = useSearchParams();

  return (
    <Flex flexDir={"column"} gap="4" alignItems={"center"}>
      <Heading as="h1" fontSize={"4xl"}>
        Sign in
      </Heading>
      <Button asChild>
        <Link
          href={`/api/auth/google?appCbUrl=${params.get("callbackUrl") || "/"}`}
        >
          Continue with Google
        </Link>
      </Button>
    </Flex>
  );
}
