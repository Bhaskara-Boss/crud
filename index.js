
import express from 'express';
import mongoose from 'mongoose';
import bodyParserfrom from 'body-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';
import trafficSignalRoute from './routes/trafficSignalRoute.js';
import vehicleRoute from './routes/vehicleRoute.js';
import cors from 'cors';
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
    app.use('/api/traffic-signals', trafficSignalRoute); // ✅ This is what your frontend fetch() is calling
    app.use('/api/vehicles', vehicleRoute); // ✅ This is what your frontend fetch() is calling
