import { Router } from 'express';
import { fetchNeoWs } from '../controllers/neowsController.js';

const router = Router();

router.get('/', fetchNeoWs);

export default router;