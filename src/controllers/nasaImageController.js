import { searchNasaImage } from '../services/nasaService.js';

export const fetchNasaImages = async (req, res, next) => {
  try {
    const { query = 'mars', page=1} = req.query;
    const data = await searchNasaImage(query,page);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};