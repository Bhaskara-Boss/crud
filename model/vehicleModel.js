// vehicleModel.js
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  ambulanceId: {
    type: String,
    required: true,
    unique: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
