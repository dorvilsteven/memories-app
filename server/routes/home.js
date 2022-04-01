import express from 'express';
import { getHomePage } from '../controllers/home.js';

const router = express.Router();

// post routes here
router.get('/', getHomePage);

export default router;