import { getSessionUser } from "@/features/auth/api/get-session-user";
import { signOut } from "@/features/auth/api/sign-out";
import { SignInLink } from "@/features/layout/components/sign-in-link";
import { Button, Menu } from "@chakra-ui/react";

export async function UserIndicator() {
  const session = await getSessionUser();

  if (session?.email) {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {session.username}
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="">{session.username}</Menu.Item>
            <Menu.Separator />
            <Menu.Item asChild value="">
              <Button
                variant="subtle"
                rounded={"lg"}
                size="sm"
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
