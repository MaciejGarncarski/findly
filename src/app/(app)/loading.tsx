import { Spinner, Text, VStack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <VStack>
      <Spinner size="xl" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  );
}
