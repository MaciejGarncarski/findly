import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function AddListingLink() {
  return (
    <Button asChild size="sm" variant={"surface"}>
      <Link href={"/adding"}>Add listing</Link>
    </Button>
  );
}
