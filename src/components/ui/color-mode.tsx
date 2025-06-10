"use client";

import type { SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import * as React from "react";

export type ColorModeProviderProps = ThemeProviderProps;

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      disableTransitionOnChange
      {...props}
    />
  );
}

export type ColorMode = "light" | "dark";

type ThemeValue = "light" | "dark" | "system";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
  theme: ThemeValue;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme, theme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    if (theme === "system") {
      setTheme("dark");
      return;
    }

    if (theme === "dark") {
      setTheme("light");
      return;
    }

    if (theme === "light") {
      setTheme("system");
      return;
    }
  };
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
    theme: (theme || "system") as ThemeValue,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { theme, colorMode } = useColorMode();

  if (theme === "system") {
    return <Monitor />;
  }

  return colorMode === "dark" ? <Moon /> : <Sun />;
}

export const ColorModeButton = React.forwardRef<HTMLButtonElement>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode();
    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: "5",
              height: "5",
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    );
  }
);

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    );
  }
);

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    );
  }
);
