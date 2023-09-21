import HttpError from 'http-errors';
import { v4 as uuidv4 } from 'uuid';
import argon2d from 'argon2';
import jwt from 'jsonwebtoken';

import { Account } from '../models/account.model.js';

class AccountRepository {

    async login(email, username, password) {

        const account = await Account.findOne({$or: [{email: email}, {username: username}]});
        if(!account) {
            return { err: HttpError.Unauthorized() }
        }
        //Nous avons un compte avec le email ou username
        //Vérification du bon mot de passe
        if(await this.validatePassword(password, account)) {
            return { account };
        } else {
            // Mauvais mot de passe
            return { err: HttpError.Unauthorized() }
        }

    }

    generateJWT(email) {
        const accessToken = jwt.sign(
            {email}, 
            process.env.JWT_PRIVATE_SECRET, 
            {expiresIn: process.env.JWT_LIFE, issuer:process.env.BASE_URL});

        const refreshToken = jwt.sign(
            {email}, 
            process.env.JWT_REFRESH_SECRET, 
            {expiresIn: process.env.JWT_REFRESH_LIFE, issuer:process.env.BASE_URL});

        return { accessToken, refreshToken };
    }


    async validatePassword(password, account) {
        try {
            return await argon2d.verify(account.passwordHash, password);
        } catch(err) {
            throw err;
        }
    }

    async create(account) {
        try {
            account.uuid = uuidv4();
            account.passwordHash = await argon2d.hash(account.password);
            delete account.password;
            return Account.create(account);
        } catch(err) {
            throw err;
        }
    }

    retrieveById(idAccount) {
        return Account.findById(idAccount);
    }

    transform(account, transformOptions = {}) {

        account.href = `${process.env.BASE_URL}/accounts/${account._id}`;

        delete account._id;
        delete account.__v;
        delete account.password; //supprime le mot de passe en clair de l'objet avant de le sauvegarder
        delete account.passwordHash;

        return account;

    }
}

export default new AccountRepository();