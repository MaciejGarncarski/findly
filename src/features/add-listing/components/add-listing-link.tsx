import { Button } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

export function AddListingLink() {
  return (
    <Button asChild variant="solid" rounded={"lg"} size="sm">
      <Link to={"/adding"}>Add listing</Link>
    </Button>
  );
}
