import express from 'express';
import HttpError from 'http-errors';

import accountRepository from '../repositories/account.repository.js';
import { authorizationJWT, refreshJWT } from '../middlewares/authorization.jwt.js';

const router = express.Router();

class AccountRoutes {

    constructor() {
        router.post('/', this.post);
        router.get('/:idAccount', authorizationJWT, this.getOne);
        router.post('/actions/login', this.login);
        router.post('/actions/refresh', refreshJWT ,this.refresh);

    }

    async getOne(req, res, next) {
        try {
            const { email } = req.auth;

            const idAccount = req.params.idAccount;
            let account = await accountRepository.retrieveById(idAccount);
            if(!account) {
                return next(HttpError.NotFound());
            }
            
            const isMe = email === account.email;
            if(!isMe && !account.isPublic) {
                return next(HttpError.Forbidden());
            }

            account = account.toObject({getters:false, virtuals:false});
            account = accountRepository.transform(account);
            

            res.status(200).json(account);

        } catch(err) {
            return next(err);
        }
    }

    async login(req, res, next) {
        const { email, username, password } = req.body;
        if((email && username) || email === "" || username === "") {
            return next(HttpError.BadRequest(''));
        }

        const result = await accountRepository.login(email, username, password);
        if(result.account) {
            //Nous sommes connectés
            let account = result.account.toObject({getters:false, virtuals:false});
            account = accountRepository.transform(account);
            const tokens = accountRepository.generateJWT(account.email);
            res.status(201).json({account, tokens});
        } else {
            //Erreur lors de la connexion
            return next(result.err);
        }
    }

    async post(req, res, next) {
        try {
            let account = await accountRepository.create(req.body);
            account = account.toObject({getters:false, virtuals:false});
            account = accountRepository.transform(account);
            const tokens = accountRepository.generateJWT(account.email);
            res.status(201).json({account, tokens});
        } catch(err) {
            return next(err);
        }

    }

    refresh(req, res, next) {

        try {
            const tokens = accountRepository.generateJWT(req.refreshToken.email);
            res.status(201).json(tokens);
        } catch(err) {
            return next(err);
        }
    }
}

new AccountRoutes();
export default router;