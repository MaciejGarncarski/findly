"use client";

import { deleteListing } from "@/features/browse/api/delete-post";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

export function DeleteBtn({ id }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteListing(id);
    router.refresh();
  };

  return <Button onClick={handleDelete}>DELETE</Button>;
}
