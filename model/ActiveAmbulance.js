import mongoose from 'mongoose';

const activeAmbulanceSchema = new mongoose.Schema({
  ambulanceId: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  requestId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('ActiveAmbulance', activeAmbulanceSchema);
