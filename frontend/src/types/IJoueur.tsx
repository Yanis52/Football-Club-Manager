export interface IJouer {
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
  strategy?: ["attaquant", "polyvalent", "milieu", "defenseur"];
}

export interface IJouerCompleted extends IJouer {
  id: string;
}
