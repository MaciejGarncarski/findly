"use client";

import { PostImage } from "@/features/item-page/components/post-image";
import { Flex } from "@chakra-ui/react";

import { ImageCardContextProvider } from "@/features/item-page/hooks/image-card-context";
import { PostOtherImages } from "@/features/item-page/components/post-other-images";

export function PostImageCard() {
  return (
    <ImageCardContextProvider>
      <Flex
        flexDir={"column"}
        maxW="full"
        w="full"
        bg="bg.muted"
        rounded={"xl"}
        gap="2"
        lg={{
          maxW: "initial",
          w: "full",
          gridColumn: "span 3",
        }}
      >
        <PostImage />
        <PostOtherImages />
      </Flex>
    </ImageCardContextProvider>
  );
}
