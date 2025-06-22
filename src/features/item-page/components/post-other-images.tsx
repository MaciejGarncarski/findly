import {
  ImageCardContextProvider,
  useImageCardContext,
} from "@/features/item-page/hooks/image-card-context";
import placeholder from "@/assets/placeholder.svg";
import { Box, Flex } from "@chakra-ui/react";

export function PostOtherImages() {
  const { currentIndex, totalImages, setCurrentIndex, images } =
    useImageCardContext();

  return (
    <ImageCardContextProvider>
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
          {Array.from({ length: totalImages }).map((_, i) => {
            const currentImage = images[i];

            return (
              <Box
                as="button"
                key={i}
                cursor={"pointer"}
                onClick={() => setCurrentIndex(i + 1)}
                flexShrink={"0"}
                flexGrow={"0"}
                position={"relative"}
                h="4rem"
                w="4rem"
                rounded={"xl"}
                aspectRatio={"1"}
                overflow={"hidden"}
                borderWidth="4px"
                borderColor={
                  i === currentIndex - 1 ? "teal.500" : "transparent"
                }
              >
                <img
                  src={currentImage ? currentImage.url : placeholder}
                  alt={currentImage ? currentImage.title : ""}
                />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </ImageCardContextProvider>
  );
}
