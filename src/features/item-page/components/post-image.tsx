import {
  Badge,
  Box,
  IconButton,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";

export function PostImage() {
  return (
    <Box position={"relative"} h="auto">
      <VStack
        zIndex={"1"}
        position={"absolute"}
        left="0"
        h="full"
        px="5"
        justifyContent={"center"}
      >
        <IconButton variant={"surface"} disabled rounded="full">
          <ChevronLeft />
          <VisuallyHidden>Previous picture</VisuallyHidden>
        </IconButton>
      </VStack>
      <VStack
        zIndex={"1"}
        position={"absolute"}
        right="0"
        h="full"
        px="5"
        justifyContent={"center"}
      >
        <IconButton variant={"surface"} rounded="full">
          <ChevronRight />
          <VisuallyHidden>Next picture</VisuallyHidden>
        </IconButton>
      </VStack>

      <Badge
        position={"absolute"}
        bottom={"2"}
        right={"2"}
        size="lg"
        zIndex={"1"}
      >
        1 / 32
      </Badge>

      <Box
        aspectRatio={"1"}
        lg={{
          h: "auto",
        }}
        overflow={"hidden"}
        rounded={"lg"}
        position={"relative"}
      >
        <Image src={placeholder} fill alt="" objectFit="cover" />
      </Box>
    </Box>
  );
}
