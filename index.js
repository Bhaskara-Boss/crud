
import express from 'express';
import mongoose from 'mongoose';
import bodyParserfrom from 'body-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/';
mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    });

    app.use('/api/user', userRoute);