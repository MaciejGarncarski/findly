import { Box, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

export function NavbarDesktop() {
  return (
    <Box as="nav" display={"none"} lg={{ display: "flex" }}>
      <Box as="ul">
        <Box as="li">
          <Text asChild>
            <Link to={"/browse"}>Browse</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
