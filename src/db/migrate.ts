import dotenv from "dotenv";
import path from "path";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./client";

dotenv.config();

async function main() {
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), "./drizzle"),
  });
  console.log(`Migrations complete`);
  process.exit(0);
}

main();
