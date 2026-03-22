import { Router } from 'express';
import { fetchEPIC } from '../controllers/epicController.js';

const router = Router();

router.get('/', fetchEPIC);

export default router;