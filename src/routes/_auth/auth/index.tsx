import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/auth/")({
  loader: () => {
    throw redirect({ to: "/auth/signin" });
  },
  component: () => null,
});
