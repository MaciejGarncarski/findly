import { getSessionUser } from "@/features/auth/api/get-session-user";
import { Avatar, Box } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await getSessionUser();

  if (!session) {
    redirect("/auth");
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
