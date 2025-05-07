// vehicleController.js
import Vehicle from '../model/vehicleModel.js';

// Register a new vehicle
export const registerVehicle = async (req, res) => {
  try {
    const { ambulanceId, driverName } = req.body;
    
    // Check if ambulanceId already exists
    const existingVehicle = await Vehicle.findOne({ ambulanceId });
    if (existingVehicle) {
      return res.status(400).json({ message: 'Ambulance ID already exists' });
    }

    const newVehicle = new Vehicle({
      ambulanceId,
      driverName,
    });

    await newVehicle.save();
    res.status(201).json({ message: 'Vehicle registered successfully', vehicle: newVehicle });
  } catch (error) {
    console.error('Error registering vehicle:', error);
    res.status(500).json({ message: 'Error registering vehicle', error: error.message });
  }
};

// Fetch all registered vehicles
export const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vehicles', error: error.message });
  }
};

// Count all registered vehicles
export const getVehicleCount = async (req, res) => {
  try {
    const count = await Vehicle.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error counting vehicles', error: error.message });
  }
};

// Get active/emergency/idle ambulances
export const getActiveAmbulances = async (req, res) => {
  try {
    const ambulances = await Vehicle.find(); // Optionally filter like { status: { $in: ['active', 'emergency'] } }
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ambulances', error: error.message });
  }
};

