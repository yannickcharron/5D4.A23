
import { Account } from '../models/account.model.js';

class AccountRepository {

    create(account) {
        try {
            //TODO: Hash password
            return Account.create(account);
        } catch(err) {
            throw err;
        }
    }
}

export default new AccountRepository();