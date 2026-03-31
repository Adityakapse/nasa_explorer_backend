import { Router } from 'express';
import { fetchNasaImages } from '../controllers/nasaImageController.js';

const router = Router();

router.get('/', fetchNasaImages);

export default router;