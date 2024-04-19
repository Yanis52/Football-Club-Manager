import bcrypt from "bcrypt";
import { Request, Response, Router } from "express";
import EquipeModel from "../models/IEquipe";
import UserModel from "../models/IUser";
const router = Router();

router.get("/user", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
});

router.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      res.status(400).json({ message: "erreur utilisateur non trouvé" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "la requêtte n'a pas pu s'établir", error });
  }
});

router.post("/user-login/", async (req: Request, res: Response) => {
  try {
    const { nom } = req.body;

    const { password } = req.body;
    const user = await UserModel.findOne({ nom: nom });
    if (!user) {
      res.status(401).json({ error: "User non trouvé " });
    } else {
      const isSamePassword = await bcrypt.compare(password, user.password);

      if (isSamePassword) {
        res.status(200).json({
          userId: user._id,
        });
      }
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'utilisateur" });
  }
});

router.post("/user", async (req, res) => {
  const { nom, prenom, email, password, budget, club, nomClub } = req.body;

  try {
    // Recherche de l'équipe correspondante dans la base de données
    const equipe = await EquipeModel.findById(club);
    if (!equipe) {
      // save equipe with the name of the club
      const newEquipe = new EquipeModel({ nom: nomClub });
      await newEquipe.save();
      // return res.status(404).json({ message: "L'équipe spécifiée n'existe pas." });
    }
    const newEquipe = await EquipeModel.findOne({ nom: nomClub });
    // Création du nouvel utilisateur avec l'équipe associée
    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      nom,
      prenom,
      email,
      password: hash,
      isAdmin: false,
      club: newEquipe, // Utilisation de l'équipe récupérée dans la base de données
      budget: 1500000000,
    });

    // Sauvegarde du nouvel utilisateur dans la base de données
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});
router.put("/user/:id", async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send("Utilisateur modifié");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la modification de l'utilisateur" });
  }
});
router.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Utilisateur supprimé");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
});

// get the team of a user after login with the user id
router.get("/user/:id/equipe", async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send(user?.club);
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la récupération de l'équipe de l'utilisateur",
    });
  }
});

export default router;
