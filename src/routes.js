import { Router } from 'express';
import { getAllLogs, createNewLog } from './controllers.js';

const router = new Router();

router.get('/get-all', getAllLogs);
router.post('/add', createNewLog);

export default router;
