import { getEPIC } from '../services/nasaService.js';

export const fetchEPIC = async (req, res, next) => {
  try {
    const { date } = req.query;
    const data = await getEPIC(date);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};