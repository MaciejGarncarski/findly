import { signOut } from "@/features/auth/api/sign-out";
import { SignInLink } from "@/features/layout/components/sign-in-link";
import { Avatar, Button, Menu, Text } from "@chakra-ui/react";
import { ChevronDown, User } from "lucide-react";
import { Link, useLoaderData, useRouter } from "@tanstack/react-router";

export function UserIndicator() {
  const { session } = useLoaderData({ from: "/_app" });
  const router = useRouter();

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
              <Link to="/account">
                <Avatar.Root size="2xs" shape="rounded" rounded="full">
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
                onClick={() => signOut(router.invalidate)}
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
