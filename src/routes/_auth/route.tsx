import { Box, VStack } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <VStack minH="100dvh" alignItems={"center"} justifyContent={"center"}>
      <Outlet />
    </VStack>
  );
}
