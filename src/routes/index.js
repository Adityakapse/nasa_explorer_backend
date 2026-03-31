import { Router } from 'express';
import apodRouter from './apod.js';
import neowsRouter from './neows.js';
import imageRouter from './image.js';
import epicRouter from './epic.js';

const router = Router();

router.use('/apod', apodRouter);
router.use('/neows', neowsRouter);
router.use('/image',imageRouter );
router.use('/epic', epicRouter);

export default router;