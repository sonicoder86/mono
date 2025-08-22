import { defineConfig } from 'drizzle-kit';
import { env } from '#@/env.ts';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'src/db/schemas/*',
  out: 'drizzle',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
