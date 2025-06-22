import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";

export const Provider = (props: { children: React.ReactNode }) => {
  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
};
