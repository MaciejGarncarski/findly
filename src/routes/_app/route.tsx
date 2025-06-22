import { getSessionUser } from "@/features/auth/api/get-session-user";
import { Layout } from "@/features/layout/pages/layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
  staleTime: 1000 * 30,
  loader: async () => {
    try {
      const data = await getSessionUser();

      if (!data) {
        return {
          session: null,
        };
      }

      return {
        session: data,
      };
    } catch {
      return {
        session: null,
      };
    }
  },
});

function RouteComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
