import { Box, Skeleton } from "@chakra-ui/react";

export function BrowseSkeletonPage() {
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
          return <Skeleton w={"20rem"} h="12rem" mx="auto" key={i} />;
        })}
      </Box>
    </Box>
  );
}
