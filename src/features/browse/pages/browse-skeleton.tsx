import { Box, Skeleton } from "@chakra-ui/react";

export function BrowseSkeletonPage() {
  return (
    <Box
      w="fit"
      mx="auto"
      py="10"
      px="6"
      lg={{ px: 0, maxW: "initial", w: "fit" }}
    >
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
          gap: "4",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
        xl={{
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {Array.from({ length: 32 }).map((_, i) => {
          return <Skeleton w={"19rem"} h="15rem" mx="auto" key={i} />;
        })}
      </Box>
    </Box>
  );
}
