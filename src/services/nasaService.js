import axios from 'axios';
import config from '../config/index.js';
console.log('API Key:', config.nasaApiKey);

const nasaApi = axios.create({
  baseURL: config.nasaBaseUrl,
  params: {
    api_key: config.nasaApiKey,
  },
});

export const getAPOD = async (date) => {
  const { data } = await nasaApi.get('/planetary/apod', {
    params: { date },
  });
  return data;
};

export const getNeoWs = async (startDate, endDate) => {
  const { data } = await nasaApi.get('/neo/rest/v1/feed', {
    params: { start_date: startDate, end_date: endDate },
  });
  return data;
};

export const getMarsPhotos = async (rover, sol, camera) => {
  const params = {sol};
  if (camera) params.camera = camera;
  const { data } = await nasaApi.get(`/mars-photos/api/v1/rovers/${rover}/photos`, {
    params,
  });
  return data;
};

export const getEPIC = async (date) => {
  const endpoint = date
    ? `/EPIC/api/natural/date/${date}`
    : '/EPIC/api/natural/latest';
  const { data } = await nasaApi.get(endpoint);
  return data;
};
