// vehicleRoute.js
import express from 'express';
import { registerVehicle, getAllVehicles, getVehicleCount, getActiveAmbulances } from '../controller/vehicleController.js';

const vehicleRoute = express.Router();

// Register new vehicle
vehicleRoute.post('/register', registerVehicle);

// Get all vehicles
vehicleRoute.get('/getAll', getAllVehicles);
vehicleRoute.get('/count', getVehicleCount);
vehicleRoute.get('/active', getActiveAmbulances);

export default vehicleRoute;
