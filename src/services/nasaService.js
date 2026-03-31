import axios from 'axios';
import config from '../config/index.js';

const nasaApi = axios.create({
  baseURL: config.nasaBaseUrl,
  params: {
    api_key: config.nasaApiKey,
  },
});

const nasaImageLibraryApi = axios.create({
  baseURL:config.nasaImageLibraryUrl
})

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

export const searchNasaImage = async (query='mars',page=1) => {
  const {data} = await nasaImageLibraryApi.get('/search',{
    params:{
      q:query,media_type:'image',page,page_size:24},
  })
  return data.collection;
};

export const getEPIC = async (date) => {
  const endpoint = date
    ? `/EPIC/api/natural/date/${date}`
    : '/EPIC/api/natural/latest';
  const { data } = await nasaApi.get(endpoint);
  return data;
};
