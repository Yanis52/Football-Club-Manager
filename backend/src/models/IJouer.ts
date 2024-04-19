import mongoose from "mongoose";

export interface IJouer extends Document {
  nom: string;
  prenom: string;
  age: number;
  vitesse: number;
  tir: number;
  passe: number;
  dribble: number;
  defense: number;
  physique: number;
  prix: number;
  poste: string;
  note: number;
  /* strategy: ["attaquant", "polyvalent", "milieu", "defenseur"]; */
}

export const JouerSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  age: { type: Number, required: true },
  vitesse: { type: Number, required: true },
  tir: { type: Number, required: true },
  passe: { type: Number, required: true },
  dribble: { type: Number, required: true },
  defense: { type: Number, required: true },
  physique: { type: Number, required: true },
  prix: { type: Number, required: true },
  poste: { type: String, required: true },
  note: { type: Number, required: true },
  pop_up: { type: String, required: false },
});

const JoueurModel = mongoose.model<IJouer>("Joueur", JouerSchema);
export default JoueurModel;
