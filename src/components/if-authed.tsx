import { getSessionUser } from "@/features/auth/api/get-session-user";
import { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

export function IfAuthed({ children }: Props) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <IfAuthedContent>{children}</IfAuthedContent>
    </Suspense>
  );
}

async function IfAuthedContent({ children }: Props) {
  const isAuthed = await getSessionUser();

  if (isAuthed) {
    return children;
  }

  return null;
}
