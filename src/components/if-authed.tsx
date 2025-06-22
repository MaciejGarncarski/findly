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

function IfAuthedContent({ children }: Props) {
  const isAuthed = true;

  if (isAuthed) {
    return children;
  }

  return null;
}
