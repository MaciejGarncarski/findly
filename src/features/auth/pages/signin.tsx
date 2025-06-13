import { signIn } from "@/features/auth/api/sign-in";
import { Button, Flex, Heading } from "@chakra-ui/react";

export function SignIn() {
  return (
    <Flex flexDir={"column"} gap="4" alignItems={"center"}>
      <Heading as="h1">Sign in</Heading>
      <Button onClick={signIn}>Continue with Google</Button>
    </Flex>
  );
}
