import { Spinner, Text, VStack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <VStack gap={"6"} py="20">
      <Spinner width={"3rem"} height={"3rem"} />
      <Text fontSize={"xl"} fontWeight={"bold"} color="colorPalette.600">
        Loading...
      </Text>
    </VStack>
  );
}
