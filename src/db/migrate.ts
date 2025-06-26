import dotenv from "dotenv";
import path from "path";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./client.ts";

dotenv.config();

async function main() {

  try {
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), "./drizzle"),
    });
    console.log("Migration successful");
  } catch (error) {
    console.error(error);
    console.log("Migration failed");
    process.exit(1);
  }

}

main();
