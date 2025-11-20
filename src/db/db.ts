import { Pool } from "pg";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.ts";


export const pool = new Pool({
    connectionString: Deno.env.get("DATABASE_URL")
,
    max: 10,
    idleTimeoutMillis: 30000,
});

export const db = drizzle(pool, {schema, casing:"snake_case"});