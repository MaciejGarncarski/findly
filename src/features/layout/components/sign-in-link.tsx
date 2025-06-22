import { Button } from "@chakra-ui/react";
import { useLocation } from "@tanstack/react-router";

export function SignInLink() {
  const currPath = useLocation({ select: (location) => location.pathname });

  const pathToRedirect =
    currPath === "/" ? "" : `?callbackUrl=${encodeURIComponent(currPath)}`;

  return (
    <Button asChild variant="subtle" rounded={"lg"} size="sm">
      <a href={`/auth/signin${pathToRedirect}`}>Sign in</a>
    </Button>
  );
}
