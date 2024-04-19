import { Request, Response, Router } from "express";
import JoueurModel from "../models/IJouer";

const router = Router();

router.get("/joueur", async (req: Request, res: Response) => {
  try {
    const joueurs = await JoueurModel.find();
    console.log(JoueurModel);
    res.status(200).send(joueurs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des joueurs" });
  }
});

router.get("/joueur-by-team", async (req: Request, res: Response) => {
  try {
    const { nomClub } = req.body;
    const joueurs = await JoueurModel.find({ team: nomClub });
    res.status(200).send(joueurs);
  } catch (error) {
    console.error("Error fetching players:", error);
  }
});

router.get("/joueur/:id", async (req: Request, res: Response) => {
  try {
    const joueur = await JoueurModel.findById(req.params.id);
    res.status(200).send(joueur);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du joueur" });
  }
});

router.post("/joueur", async (req: Request, res: Response) => {
  try {
    const joueur = new JoueurModel(req.body);
    await joueur.save();
    res.status(200).send(joueur);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la création du joueur" });
  }
});

router.put("/joueur/:id", async (req: Request, res: Response) => {
  try {
    await JoueurModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send("Joueur modifié");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la modification du joueur" });
  }
});

router.delete("/joueur/:id", async (req: Request, res: Response) => {
  try {
    await JoueurModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Joueur supprimé");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du joueur" });
  }
});

export default router;
