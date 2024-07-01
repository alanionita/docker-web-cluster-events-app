import { Request, Response, NextFunction } from 'express';
import express from 'express';

import Event from '../controllers/event';
import { EventAdd } from '../types';
import { removeBadChars } from '../controllers/utils';

const router = express.Router();

router.get('/list', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const eventData = await Event.readMany();
    return res.json(eventData);
  } catch (e) {
    return next(e);
  }
});

router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const eventData = await Event.readOne(id);
    return res.json(eventData);
  } catch (e) {
    return next(e);
  }
});

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const data = { ...req.body } as EventAdd;
    const dataKeys = Object.keys(data);
    dataKeys.forEach(key => {
      data[key] = removeBadChars(data[key])
    })
    return res.json(await Event.create(data));
  } catch (e) {
    return next(e);
  }
});

export default router;