import axios from 'axios';

const url = 'http://localhost:3005/posts';

export const fetchPosts = () => axios.get(url);