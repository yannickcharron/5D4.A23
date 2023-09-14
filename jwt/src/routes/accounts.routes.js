import express from 'express';
import accountRepository from '../repositories/account.repository.js';

const router = express.Router();

class AccountRoutes {

    constructor() {
        router.post('/', this.post);

    }

    async post(req, res, next) {
        try {
            let account = await accountRepository.create(req.body);
            res.status(201).json(account);
        } catch(err) {
            return next(err);
        }

    }
}

new AccountRoutes();
export default router;