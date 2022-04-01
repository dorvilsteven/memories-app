import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// post routes here
router.get('/', getPosts);
router.post('/', createPost);

export default router;