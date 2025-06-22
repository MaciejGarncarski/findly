import { deleteListing } from "@/features/browse/api/delete-post";
import { Button } from "@chakra-ui/react";
import { useServerFn } from "@tanstack/react-start";

type Props = {
  id: number;
};

export function DeleteBtn({ id }: Props) {
  const handleDelete = useServerFn(() =>
    deleteListing({ data: { postId: id } })
  );

  return <Button onClick={() => handleDelete()}>DELETE</Button>;
}
