import { Item } from "@/features/browse/components/item/item";
import { Box } from "@chakra-ui/react";

export function ItemList() {
  return (
    
    <Box
      display="grid"
      gridTemplateColumns={"1fr"}
      gap="8"
      lg={{
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
}

