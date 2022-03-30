// const express = require('express');
import express from 'express';
// import routes
import postRoutes from './post.js';
import homeRoutes from './home.js';

const router = express.Router();

router.use('/', homeRoutes);
router.use('/posts', postRoutes);

export default router;
