export interface IUser {
  nom: string;
  prenom: string;
  nomClub: string;
  email: string;
  password: string;
}

export interface IUserCompleted extends IUser {
  userId?: string;
}

export type userLoginType = {
  nom: string;
  password: string;
};
