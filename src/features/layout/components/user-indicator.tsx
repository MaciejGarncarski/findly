import { getSessionUser } from "@/features/auth/api/get-session-user";
import { signOut } from "@/features/auth/api/sign-out";
import { SignInLink } from "@/features/layout/components/sign-in-link";
import { Avatar, Button, Menu, Text } from "@chakra-ui/react";
import { ChevronDown, User } from "lucide-react";
import Link from "next/link";

export async function UserIndicator() {
  const session = await getSessionUser();

  if (session?.email) {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="plain" size="sm" px="0">
            <User />
            Your account
            <ChevronDown />
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="username" asChild rounded={"lg"}>
              <Link href="/account">
                <Avatar.Root size="xs" shape="rounded" rounded="full">
                  {session.picture && <Avatar.Image src={session.picture} />}
                  <Avatar.Fallback name={session.name} />
                </Avatar.Root>
                <Text>{session.name}</Text>
              </Link>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item asChild value="signOut">
              <Button
                variant="ghost"
                rounded={"lg"}
                size="xs"
                onClick={signOut}
              >
                Sign out
              </Button>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );
  }

  return <SignInLink />;
}
