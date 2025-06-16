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
import { useImageCardContext } from "@/features/item-page/hooks/image-card-context";

export function PostImage() {
  const { currentIndex, setCurrentIndex, totalImages, images } =
    useImageCardContext();

  const decreaseIndex = () => {
    setCurrentIndex((idx) => idx - 1);
  };

  const increaseIndex = () => {
    setCurrentIndex((idx) => idx + 1);
  };

  const decreaseBtnDisabled = currentIndex <= 1;
  const increaseBtnDisabled = currentIndex >= totalImages;

  const currentImage = images[currentIndex - 1];

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
        <IconButton
          variant={"surface"}
          disabled={decreaseBtnDisabled}
          rounded="full"
          onClick={decreaseIndex}
        >
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
        <IconButton
          variant={"surface"}
          rounded="full"
          onClick={increaseIndex}
          disabled={increaseBtnDisabled}
        >
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
        {currentIndex} / {totalImages}
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
        <Image
          src={currentImage ? currentImage.url : placeholder}
          fill
          alt=""
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
