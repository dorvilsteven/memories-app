import PostData from '../models/postData.js';

export const getPosts = async (req, res) => {
    // res.send('welcome to memories post\'s page');
    try {
        const posts = await PostData.find();
        console.log(posts);
        res.status(200).json(posts)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    // res.send('post creation');
    const post = req.body;
    const newPost = new PostData(post);
    try {
        await newPost.save();
    } catch(error) {    
        res.status(404).json({ message: error.message });
    }
};