"use client";

import { deleteListing } from "@/features/browse/api/delete-post";
import { Button } from "@chakra-ui/react";

type Props = {
  id: number;
};

export function DeleteBtn({ id }: Props) {
  const handleDelete = async () => {
    await deleteListing(id);
  };

  return <Button onClick={handleDelete}>DELETE</Button>;
}
