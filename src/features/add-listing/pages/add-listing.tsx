import { AddListingForm } from "@/features/add-listing/components/add-listing-form";
import { Box } from "@chakra-ui/react";

export async function AddListing() {
  return (
    <Box mx="auto" maxW="6xl" py="20">
      <AddListingForm />
    </Box>
  );
}
