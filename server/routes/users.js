import express from 'express';

import { CreateUser, AddFridgeItem } from '../controllers/users.js';

const router = express.Router();

router.post('/add', CreateUser);
router.post('/fridge/add', AddFridgeItem);

export default router;