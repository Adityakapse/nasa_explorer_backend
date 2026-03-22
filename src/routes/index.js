import { Router } from 'express';
import apodRouter from './apod.js';
import neowsRouter from './neows.js';
import marsRouter from './mars.js';
import epicRouter from './epic.js';

const router = Router();

router.use('/apod', apodRouter);
router.use('/neows', neowsRouter);
router.use('/mars', marsRouter);
router.use('/epic', epicRouter);

export default router;