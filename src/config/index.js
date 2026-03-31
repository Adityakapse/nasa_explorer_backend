import 'dotenv/config';

export default {
  port: process.env.PORT,
  nasaApiKey: process.env.NASA_API_KEY,
  nasaBaseUrl: 'https://api.nasa.gov',
  nasaImageLibraryUrl:'https://images-api.nasa.gov'
};