import { getMarsPhotos } from '../services/nasaService.js';

export const fetchMarsPhotos = async (req, res, next) => {
  try {
    const { rover = 'curiosity', sol = 1000, camera } = req.query;
    const data = await getMarsPhotos(rover, sol, camera);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};