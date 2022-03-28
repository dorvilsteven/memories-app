// const express = require('express');
import express from 'express';
// import routes
import postRoutes from './post.js';

const router = express.Router();

router.use('/posts', postRoutes);

export default router;
