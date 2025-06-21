import { SignIn } from "@/features/auth/pages/signin";
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

export default async function SignInPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <SignIn />
    </Suspense>
  );
}
