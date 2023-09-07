import express from 'express';

import expressRateLimit from 'express-rate-limit';
import expressSlowDown from 'express-slow-down';

const router = express.Router();

const limiter = expressRateLimit({
    windowMs:10 * 60 * 1000,
    max:10,
    message:'Too many requests'
});

class LimitRoutes {
    constructor() {
        router.get('/rate-limit', limiter, this.rateLimit);
    }

    rateLimit(req, res) {
        console.log(req.ip);
        res.status(200).json(req.rateLimit);
    }
}

new LimitRoutes();
export default router;