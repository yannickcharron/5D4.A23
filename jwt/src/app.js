import express from 'express';
import expressRateLimit from 'express-rate-limit';

import database from './core/database.js';
import errors from './core/errors.js';

import limitRoutes from './routes/limits.routes.js';
import accountRoutes from './routes/accounts.routes.js';

const app = express();

database();

app.use(express.json());

//Pour mettre un middleware sur toutes routes
const limiter = expressRateLimit({
    windowMs:10 * 60 * 1000,
    max:10,
    message:'Too many requests'
});
app.use(limiter);

app.use('/accounts', accountRoutes);
app.use(limitRoutes);

app.use(errors);

export default app;