import { defineConfig } from "drizzle-kit";
import { env } from "better-auth";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
  casing: "snake_case",
});
