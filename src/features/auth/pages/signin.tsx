import { useSearch } from "@tanstack/react-router";

import { Button, Flex, Heading } from "@chakra-ui/react";

export function SignIn() {
  const params = useSearch({
    from: "/_auth/auth/signin",
  });

  return (
    <Flex flexDir={"column"} gap="10" alignItems={"center"}>
      <Heading as="h1" fontSize={"5xl"}>
        Sign in
      </Heading>
      <Button asChild>
        <a href={`/api/auth/google?appCbUrl=${params.callbackUrl || "/"}`}>
          Continue with Google
        </a>
      </Button>
    </Flex>
  );
}
