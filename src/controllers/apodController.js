import { getAPOD } from '../services/nasaService.js';

export const fetchAPOD = async (req, res, next) => {
  try {
    const { date } = req.query;
    const data = await getAPOD(date);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};