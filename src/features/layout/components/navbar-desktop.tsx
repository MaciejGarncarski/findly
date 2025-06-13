import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export function NavbarDesktop() {
  return (
    <Box as="nav" display={"none"} lg={{ display: "flex" }}>
      <Box as="ul">
        <Box as="li">
          <Text asChild>
            <Link href={"/browse"} prefetch={false}>
              Browse
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
