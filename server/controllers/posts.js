import PostData from '../models/postData.js';

export const getPosts = (req, res) => {
    res.send('welcome to memories post\'s page');
};

export const createPost = (req, res) => {
    res.send('post creation');
};