import express from 'express';
import { registerTrafficSignal, getAllTrafficSignals, getSignalCount } from '../controller/trafficSignalController.js';

const trafficSignalRoute = express.Router(); // ✅ This line was missing

trafficSignalRoute.post('/register', registerTrafficSignal);
trafficSignalRoute.get('/', getAllTrafficSignals);
trafficSignalRoute.get('/count', getSignalCount); // ✅ This is where the error happened

export default trafficSignalRoute;
