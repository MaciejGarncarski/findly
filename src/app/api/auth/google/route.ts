import { env } from "@/config/env";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const GOOGLE_OAUTH_URL = env.GOOGLE_OAUTH_URL;
const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = env.GOOGLE_CALLBACK_URL;
const GOOGLE_OAUTH_SCOPES = [
  "https%3A//www.googleapis.com/auth/userinfo.email",
  "https%3A//www.googleapis.com/auth/userinfo.profile",
];

export async function GET(req: NextRequest) {
  const appCbUrl = req.nextUrl.searchParams.get("appCbUrl");
  const state = {
    appCbUrl,
  };
  const scopes = GOOGLE_OAUTH_SCOPES.join(" ");
  const GOOGLE_OAUTH_CONSENT_SCREEN_URL = `${GOOGLE_OAUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}&access_type=offline&response_type=code&state=${JSON.stringify(
    state
  )}&scope=${scopes}`;

  redirect(GOOGLE_OAUTH_CONSENT_SCREEN_URL);
}
