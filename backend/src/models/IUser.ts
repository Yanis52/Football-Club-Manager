import mongoose from "mongoose";
import { EquipeSchema, IEquipe } from "./IEquipe";


export interface IUser extends Document {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    isAdmin: boolean;
    club?: IEquipe;
    budget: Number;
}

export const UserSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin : { type: Boolean, required: true },
    club: { type:EquipeSchema, required: false},
    budget: { type: Number, required: false }
});

const UserModel= mongoose.model<IUser>('User', UserSchema);
export default UserModel; 