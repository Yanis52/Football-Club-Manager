import { Router, Request, Response } from 'express';
import MatchModel from '../models/IMatch';

const router = Router();

router.get('/match', async (req: Request, res: Response) => {
    try {
        const matches = await MatchModel.find();
        res.status(200).send(matches);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des matchs' });
    }
});

router.get('/match/:id', async (req: Request, res: Response) => {
    try {
        const match = await MatchModel.findById(req.params.id);
        res.status(200).send(match);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du match' });
    }
});

router.post('/match', async (req: Request, res: Response) => {
    try {
        const match = new MatchModel(req.body);
        await match.save();
        res.status(200).send(match);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création du match' });
    }
});

router.put('/match/:id', async (req: Request, res: Response) => {
    try {
        await MatchModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send('Match modifié');
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la modification du match' });
    }
});

router.delete('/match/:id', async (req: Request, res: Response) => {
    try {
        await MatchModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Match supprimé');
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du match' });
    }
});

export default router;
