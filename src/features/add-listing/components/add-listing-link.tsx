import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function AddListingLink() {
  return (
    <Button asChild variant="solid" rounded={"lg"} size="sm">
      <Link href={"/adding"}>Add listing</Link>
    </Button>
  );
}
