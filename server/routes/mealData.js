import express from 'express';

import { getMealData, searchMealDB } from '../controllers/mealData.js'

const router = express.Router();

router.get('/', getMealData);
router.post('/', searchMealDB);

export default router;