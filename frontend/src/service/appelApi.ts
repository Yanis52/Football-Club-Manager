import { IJouerCompleted } from "../types/IJoueur";
import { IUser, IUserCompleted, userLoginType } from "../types/IUser";

export const postUser = async (userData: IUser) => {
  try {
    console.log("postUser", userData);
    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    };
    const response = await fetch("http://localhost:3002/api/user", options);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const putJoueur = async (joueurData: IJouerCompleted) => {
  try {
    console.log("postUser", joueurData);
    const options = {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(joueurData),
    };
    const response = await fetch(
      `http://localhost:3002/api/joueur${joueurData.id}`,
      options
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const login = async (
  userData: userLoginType
): Promise<IUserCompleted> => {
  console.log("login", userData);
  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  };

  const response = await fetch("http://localhost:3002/api/user-login", options);
  const data: IUserCompleted = await response.json();
  if (data.userId) localStorage.setItem("userId", data.userId);

  return data;
};

export const getJoueurs = async () => {
  try {
    const response = await fetch("http://localhost:3002/api/joueur");
    const responseData = await response.json();
    console.log("service Api ", responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
