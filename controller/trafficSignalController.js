import TrafficSignal from '../model/TrafficSignalModel.js';

export const registerTrafficSignal = async (req, res) => {
  try {
    const { location, signalId } = req.body;
    const newSignal = new TrafficSignal({ location, signalId });
    await newSignal.save();
    res.status(201).json({ message: 'Traffic signal registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering signal', error });
  }
};

export const getAllTrafficSignals = async (req, res) => {
  try {
    const signals = await TrafficSignal.find();
    res.status(200).json(signals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching signals', error });
  }
};

export const getSignalCount = async (req, res) => {
  try {
    const count = await TrafficSignal.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error counting signals', error });
  }
};
