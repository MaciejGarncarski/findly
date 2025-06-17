"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
