import { IJouer } from "./IJoueur";
import { IMatch } from "./IMatch";

export interface IEquipe extends Document {
  nom: string;
  valeur: number;
  joueurs: [IJouer];
  evenements: [IMatch];
}
