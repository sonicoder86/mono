import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors'
import { rootRoute } from './routes/root.ts';
import { healthRoute } from './routes/health.ts';

const app = new Hono();

// Simple GET route
app.use(cors({ origin: '*' }));
rootRoute(app);
healthRoute(app);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
