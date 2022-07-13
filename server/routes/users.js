import express from 'express';

import { CreateUser, AddFridgeItem, RemoveFridgeItem } from '../controllers/users.js';

const router = express.Router();

router.post('/add', CreateUser);
router.post('/fridge/add', AddFridgeItem);
router.post('/fridge/remove', RemoveFridgeItem);

export default router;