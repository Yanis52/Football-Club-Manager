import express from 'express';
import { Request, Response } from 'express';
import EquipeModel from '../models/IEquipe';

const router = express.Router();

router.get('/equipe', async (req: Request, res: Response) => {
    try {
        const equipes = await EquipeModel.find();
        res.status(200).send(equipes);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des équipes' });
    }
});

router.get('/equipe/:id', async (req: Request, res: Response) => {
    try {
        const equipe = await EquipeModel.findById(req.params.id);
        res.status(200).send(equipe);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'équipe' });
    }
});

router.post('/equipe', async (req: Request, res: Response) => {
    try {
        const equipe = new EquipeModel(req.body);
        await equipe.save();
        res.status(200).send(equipe);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'équipe' });
    }
});

router.put('/equipe/:id', async (req: Request, res: Response) => {
    
    try {
        await EquipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send('Équipe modifiée');
    } catch (err) {
        res.status(500).json({ message: err});
    }
});

router.delete('/equipe/:id', async (req: Request, res: Response) => {
    try {
        await EquipeModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Équipe supprimée');
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'équipe' });
    }
});

export default router;