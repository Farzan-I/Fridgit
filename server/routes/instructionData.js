import express from 'express';

import { getInstructionData } from '../controllers/instructionData.js'

const router = express.Router();

router.post('/', getInstructionData);

export default router;