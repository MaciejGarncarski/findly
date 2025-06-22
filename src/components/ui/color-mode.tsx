import type { SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import { Monitor, Moon, Sun } from "lucide-react";
import * as React from "react";

export type ColorMode = "light" | "dark";

type ThemeValue = "light" | "dark" | "system";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
  theme: ThemeValue;
}

// export function useColorMode(): UseColorModeReturn {
//   const { resolvedTheme, setTheme, forcedTheme, theme } = useTheme();
//   const colorMode = forcedTheme || resolvedTheme;

//   const toggleColorMode = () => {
//     if (!theme) {
//       setTheme("system");
//       return;
//     }

//     if (theme === "system") {
//       setTheme("dark");
//       return;
//     }

//     if (theme === "dark") {
//       setTheme("light");
//       return;
//     }

//     if (theme === "light") {
//       setTheme("system");
//       return;
//     }
//   };

//   return {
//     colorMode: colorMode as ColorMode,
//     theme: theme as ThemeValue,
//     setColorMode: setTheme,
//     toggleColorMode,
//   };
// }

export function useColorModeValue<T>(light: T, dark: T) {
  const colorMode = "dark";
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const colorMode = "dark";
  const theme = "system";

  if (theme === "system") {
    return <Monitor />;
  }

  return colorMode === "dark" ? <Moon /> : <Sun />;
}

export const ColorModeButton = React.forwardRef<HTMLButtonElement>(
  function ColorModeButton(props, ref) {
    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={() => console.log("change theme")}
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
