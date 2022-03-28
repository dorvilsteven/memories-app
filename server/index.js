import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

// import postRoutes from './routes/post.js';
import routes from './routes/index.js';

const app = express();

   // use routes
// app.use('/posts', postRoutes);
app.use(routes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://dorvilsteven:Dontneed123@cluster0.mfj9f.mongodb.net/memories-app?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3005;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Must figure out this bug, Error: `useFindAndModify` is an invalid option.
// mongoose.set('useFindAndModify', false);