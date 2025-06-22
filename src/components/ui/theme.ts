import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "teal",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-geist-sans)" },
        body: { value: "var(--font-geist-sans)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
