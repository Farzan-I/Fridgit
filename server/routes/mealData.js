import express from 'express';

import { getMealData } from '../controllers/mealData.js'

const router = express.Router();

router.post('/', getMealData);

export default router;