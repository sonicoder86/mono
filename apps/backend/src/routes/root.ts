import type { Hono } from 'hono';

export const rootRoute = (app: Hono) => {
    app.get('/', (c) => {
        return c.json({
            message: 'Hello from Hono.js 555!',
            timestamp: new Date().toISOString(),
        });
    });
};
