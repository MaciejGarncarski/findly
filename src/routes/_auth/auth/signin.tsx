import { SignIn } from "@/features/auth/pages/signin";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/auth/signin")({
  component: SignIn,
  validateSearch: (data) => {
    return data as {
      callbackUrl?: string;
    };
  },
});
