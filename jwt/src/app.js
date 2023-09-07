import express from 'express';

import database from './core/database.js';

import limitRoutes from './routes/limits.routes.js';

const app = express();

database();

app.use(limitRoutes);

export default app;