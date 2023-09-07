import express from 'express';

import database from './core/database.js';

const app = express();

database();

export default app;