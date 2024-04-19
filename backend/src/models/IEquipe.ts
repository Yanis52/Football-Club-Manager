import mongoose from "mongoose";
import { IJouer, JouerSchema } from "./IJouer";
import { IMatch, MatchSchema } from "./IMatch";

export interface IEquipe extends Document {
    nom: string;
   valeur: number;
   joueurs : [IJouer];
   evenements: [IMatch];
}

export const EquipeSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    valeur: { type: Number, required: false },
    joueurs: { type: [JouerSchema], required: false},
    evenements: { type: [MatchSchema],required: false}
});

const EquipeModel = mongoose.model<IEquipe>('Equipe', EquipeSchema);

export default EquipeModel;