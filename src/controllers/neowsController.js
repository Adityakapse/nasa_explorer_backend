import { getNeoWs } from '../services/nasaService.js';

export const fetchNeoWs = async (req, res, next) => {
  try {
    const { start_date, end_date } = req.query;
    const data = await getNeoWs(start_date, end_date);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};