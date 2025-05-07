import mongoose from "mongoose";

const trafficSignalSchema = new mongoose.Schema({
  signalId: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  intersection: { type: String, required: true },
  signalType: { type: String, default: "standard" },
  hasPedestrianCrossing: { type: Boolean, default: false },
  hasCamera: { type: Boolean, default: false },
  status: { type: String, default: "active" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("TrafficSignal", trafficSignalSchema);
