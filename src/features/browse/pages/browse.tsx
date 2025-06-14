import { Box } from "@chakra-ui/react";
import Image from "next/image";
import placeholderImage from "@/assets/placeholder.svg";

export function BrowsePage() {
  return (
    <Box maxW="6xl" mx="auto" py="10" px="6" lg={{ px: 0 }}>
      <Box
        display="grid"
        gridTemplateColumns={"repeat(1, 1fr)"}
        gap="4"
        justifyContent={"center"}
        alignItems={"center"}
        md={{
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
        lg={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {Array.from({ length: 32 }).map((_, i) => {
          return (
            <Box
              key={i}
              w={"20rem"}
              h="12rem"
              mx="auto"
              bg="bg.panel"
              rounded="xl"
              borderWidth={"1px"}
              borderColor={"border.subtle"}
              overflow={"hidden"}
              shadow="lg"
            >
              <Box position={"relative"} h="10rem">
                <Image
                  style={{ objectFit: "cover" }}
                  src={placeholderImage}
                  fill
                  alt="placeholder"
                />
              </Box>
              <Box bg="bg.subtle" h="10rem">
                Item
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
