import { SignIn } from "@/features/auth/pages/signin";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return <SignIn callbackURL={params.callbackUrl} />;
}
