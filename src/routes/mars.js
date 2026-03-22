import { Router } from 'express';
import { fetchMarsPhotos } from '../controllers/marsController.js';

const router = Router();

router.get('/', fetchMarsPhotos);

export default router;