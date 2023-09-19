import HttpError from 'http-errors';
import { v4 as uuidv4 } from 'uuid';
import argon2d from 'argon2';

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

    generateJWT() {
        
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
            delete account.password; //supprime le mot de passe en clair de l'objet avant de le sauvegarder
            return Account.create(account);
        } catch(err) {
            throw err;
        }
    }
}

export default new AccountRepository();