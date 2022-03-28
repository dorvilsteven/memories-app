import express from 'express';

const router = express.Router();

// post routes here
router.get('/', (req, res) => {
    res.send('welcome to memories post\'s page');
});

export default router;