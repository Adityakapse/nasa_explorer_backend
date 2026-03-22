import { Router } from 'express';
import { fetchAPOD } from '../controllers/apodController.js';

const router = Router();

router.get('/', fetchAPOD);

export default router;