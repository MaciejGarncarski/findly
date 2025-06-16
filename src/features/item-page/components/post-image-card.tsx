"use client";

import { PostImage } from "@/features/item-page/components/post-image";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";

// !TODO add react context

export function PostImageCard() {
  return (
    <Flex
      flexDir={"column"}
      maxW="full"
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
      <Box p="4">
        <Flex
          gap="2"
          px="2"
          justifyContent={"start"}
          alignItems={"center"}
          overflowX="auto"
          overflowY={"hidden"}
          rounded={"lg"}
          maxW="100%"
        >
          {Array.from({ length: 34 }).map((_, i) => {
            return (
              <Box
                key={i}
                flexShrink={"0"}
                flexGrow={"0"}
                position={"relative"}
                h="4rem"
                w="4rem"
                rounded={"xl"}
                aspectRatio={"1"}
                overflow={"hidden"}
                borderWidth="4px"
                borderColor={i === 0 ? "teal.500" : "transparent"}
              >
                <Image src={placeholder} fill alt="" />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
