import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    email: { type: String, required:true, unique:true },
    username:{ type:String, required:true, unique:true },
    displayName: { type: String, required:true },
    uuid: { type: String, required:true, unique:true },
    passwordHash: { type: String, required:true },
    roles: [String],
    isPublic: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false }
}, {
    collection:'accounts',
    strict: 'throw',
    timestamps: true
});

const Account = mongoose.model('Account', accountSchema);

export { Account };