import { Request, Response, NextFunction } from 'express';
import express from 'express';

import Ticket from '../controllers/ticket';

const router = express.Router();

router.get('/list', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const reqQueryPrefix = req.query.prefix;
        const ticketData = await Ticket.readMany(String(reqQueryPrefix));
        return res.json(ticketData);
    } catch (e) {
        return next(e);
    }
});

router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const ticketData = await Ticket.readOne(id);
        return res.json(ticketData);
    } catch (e) {
        return next(e);
    }
});

export default router;