import type { Hono } from 'hono';

export const healthRoute = (app: Hono) => {
    app.get('/health', (c) => {
        return c.json({ status: 'ok' });
    });
};
