import { env } from "@/config/env";
import { createServerFileRoute } from "@tanstack/react-start/server";
import { redirect } from "@tanstack/react-router";

const GOOGLE_OAUTH_URL = env?.GOOGLE_OAUTH_URL;
const GOOGLE_CLIENT_ID = env?.GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = env?.GOOGLE_CALLBACK_URL;
const GOOGLE_OAUTH_SCOPES = [
  "https%3A//www.googleapis.com/auth/userinfo.email",
  "https%3A//www.googleapis.com/auth/userinfo.profile",
];

export const ServerRoute = createServerFileRoute("/api/auth/google").methods({
  GET: async ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const appCbUrl = searchParams.get("appCbUrl");
    const state = {
      appCbUrl: appCbUrl ? appCbUrl : "/",
    };
    const scopes = GOOGLE_OAUTH_SCOPES.join(" ");
    const GOOGLE_OAUTH_CONSENT_SCREEN_URL = `${GOOGLE_OAUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}&access_type=offline&response_type=code&state=${JSON.stringify(
      state
    )}&scope=${scopes}`;

    return redirect({ href: GOOGLE_OAUTH_CONSENT_SCREEN_URL });
  },
});
