import express from 'express';

import { getMealData, searchMealDB } from '../controllers/mealData.js'

const router = express.Router();

router.post('/', getMealData);
router.post('/search', searchMealDB);

export default router;