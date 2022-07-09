import express from 'express';

import { CreateUser } from '../controllers/users';

const router = express.Router();

router.post('/', CreateUser);

export default router;