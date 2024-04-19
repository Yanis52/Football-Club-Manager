import { IEquipe } from "./IEquipe";

export interface IMatch extends Document {
  date: Date;
  equipe1: IEquipe[];
  equipe2: IEquipe[];
  score1: number;
  score2: number;
}
