import type { Hono } from 'hono';

export const rootRoute = (app: Hono) => {
    app.get('/', (c) => {
        return c.json({
            message: 'Hello Hono!',
            timestamp: new Date().toISOString(),
        });
    });
};
