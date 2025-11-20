
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(9999),
  DATABASE_URL: z.string().url(),
});

export type Env = z.infer<typeof EnvSchema>;

const parsed = EnvSchema.safeParse(Deno.env.toObject());

if (!parsed.success) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(parsed.error.flatten().fieldErrors, null, 2));
  Deno.exit(1);
}

const env = parsed.data;

export default env;
