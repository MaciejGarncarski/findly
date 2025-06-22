import { getSessionUser } from "@/features/auth/api/get-session-user";
import { Avatar, Box } from "@chakra-ui/react";
import {
  createFileRoute,
  redirect,
  useLoaderData,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_app/account")({
  component: RouteComponent,
  staleTime: 3000,
  beforeLoad: async () => {
    const session = await getSessionUser();
    console.log("FETCH");

    if (!session?.email) {
      throw redirect({ to: "/auth/signin" });
    }
  },
});

function RouteComponent() {
  const { session } = useLoaderData({ from: "/_app" });

  if (!session) {
    return null;
  }

  return (
    <Box mx="auto" py="10" px="6" maxW="6xl" lg={{ px: 0 }}>
      <Avatar.Root size="xs" shape="rounded" rounded="full">
        {session.picture && <Avatar.Image src={session.picture} />}
        <Avatar.Fallback name={session.name} />
      </Avatar.Root>
      <p>Your signed in as user: {session.name}</p>
      <p>Your email is: {session.email}</p>
      <p>Your role is: {session.role}</p>
    </Box>
  );
}
