import type { Hono } from 'hono';
import { adapter } from '#@/db/adapter.ts';

export const rootRoute = (app: Hono) => {
  app.get('/', async (c) => {
    const result = await adapter.execute('SELECT 1');
    console.log(result);
    return c.json({
      message: 'Hello Hono!',
      timestamp: new Date().toISOString(),
    });
  });
};
