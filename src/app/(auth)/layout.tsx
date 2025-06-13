import { Center } from "@chakra-ui/react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Center height="100vh">{children}</Center>
    </div>
  );
}
