import { Box, EmptyState, Show } from "@chakra-ui/react";
import { Item } from "@/features/browse/components/item/item";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { FrownIcon } from "lucide-react";

// TODO: API ROTUE + REACT QUERY
async function getItems() {
  const items = await db.select({ id: posts.id }).from(posts);

  return items;
}

export async function BrowsePage() {
  const items = await getItems();

  return (
    <>
      <Box
        w="fit"
        mx="auto"
        py="10"
        px="6"
        lg={{ px: 0, maxW: "initial", w: "fit" }}
      >
        <Show
          when={items.length > 0}
          fallback={
            <EmptyState.Root size="lg">
              <EmptyState.Content>
                <EmptyState.Indicator>
                  <FrownIcon />
                </EmptyState.Indicator>
                <EmptyState.Title>No listings yet.</EmptyState.Title>
                <EmptyState.Description>
                  Add first listing.
                </EmptyState.Description>
              </EmptyState.Content>
            </EmptyState.Root>
          }
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
              gap: "6",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {items.map(({ id }) => {
              return <Item key={id} id={id} />;
            })}
          </Box>
        </Show>
      </Box>
    </>
  );
}
