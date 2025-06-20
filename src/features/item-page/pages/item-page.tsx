import { Box, Breadcrumb, Flex, Show, Stack } from "@chakra-ui/react";
import Link from "next/link";

import { ContactCard } from "@/features/item-page/components/contact-card";
import { DeliveryCard } from "@/features/item-page/components/delivery-card";
import { PostImageCard } from "@/features/item-page/components/post-image-card";
import { DescriptionCard } from "@/features/item-page/components/description-card";
import { DeleteBtn } from "@/features/browse/components/delete-btn";
import { getSessionUser } from "@/features/auth/api/get-session-user";

type Props = {
  id: number;
};

export async function ItemPage({ id }: Props) {
  const session = await getSessionUser();

  return (
    <Flex
      maxW="6xl"
      mx="auto"
      py="10"
      px="6"
      xl={{ px: 0 }}
      flexDir={"column"}
      gap="8"
    >
      <Stack>
        <Breadcrumb.Root size={"lg"}>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href="/">Home</Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href="/browse">Browse</Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Item [slug]</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Stack>

      <Box
        display="flex"
        flexDir={"column"}
        gap="8"
        lg={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10",
        }}
        maxW="full"
        alignItems={"start"}
      >
        <PostImageCard />
        <Box gridRow={"2"} gridColumn={"span 3"}>
          <DescriptionCard />
        </Box>
        <Flex
          w="full"
          flexDir={"column"}
          gap="8"
          alignSelf={"start"}
          top="20"
          lg={{
            position: "sticky",
          }}
        >
          <Show when={session?.role === "ADMIN"}>
            <DeleteBtn id={id} />
          </Show>
          <ContactCard />
          <DeliveryCard />
        </Flex>
      </Box>
    </Flex>
  );
}
