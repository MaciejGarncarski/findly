import { z } from "zod";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const envSchema = z.object({
  ACCESS_TOKEN_SECRET: z.string(),
  APP_ORIGIN: z.string().startsWith("http"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_OAUTH_URL: z.string(),
  GOOGLE_CALLBACK_URL: z.string(),
  GOOGLE_ACCESS_TOKEN_URL: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log(parsedEnv.error.errors);

  if (process.env.PHASE !== PHASE_PRODUCTION_BUILD) {
    process.exit(1);
  }
}

export const env = parsedEnv.data;
