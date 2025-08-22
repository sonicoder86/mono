import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "#@/env.ts";

const queryClient = postgres(env.DATABASE_URL);

export const adapter = drizzle(queryClient);
