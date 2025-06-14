"use client";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SignInLink() {
  const currPath = usePathname();

  const pathToRedirect =
    currPath === "/" ? "" : `?callbackUrl=${encodeURIComponent(currPath)}`;

  return (
    <Button asChild variant="subtle" rounded={"lg"} size="sm">
      <Link href={`/auth/signin${pathToRedirect}`} prefetch={false}>
        Sign in
      </Link>
    </Button>
  );
}
