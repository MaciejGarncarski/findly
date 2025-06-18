"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
      <ChakraProvider value={system}>{props.children}</ChakraProvider>
    </ThemeProvider>
  );
};
