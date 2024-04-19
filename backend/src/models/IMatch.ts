import mongoose from "mongoose";
import { EquipeSchema, IEquipe } from "./IEquipe";



export interface IMatch extends Document {
    date: Date;
    equipe1: IEquipe[];
    equipe2: IEquipe[];
    score1: number;
    score2: number;

}

export const MatchSchema: mongoose.Schema<IMatch> = new mongoose.Schema({
    date: { type: Date, required: true },
    equipe1: { type: [EquipeSchema], required: false },
    equipe2: { type: [EquipeSchema], required: false },
    score1: { type: Number, required: true },
    score2: { type: Number, required: true }
});

const MatchModel = mongoose.model<IMatch>('Match', MatchSchema);
export default MatchModel; 