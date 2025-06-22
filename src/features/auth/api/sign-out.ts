import { deleteSession } from "@/features/auth/api/session";

export async function signOut(invalidateFn: () => void) {
  await deleteSession();

  invalidateFn();
}
