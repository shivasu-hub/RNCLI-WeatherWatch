// api.ts
import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1';
const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/';

export const getWeatherForecast = async (
  latitude: number,
  longitude: number,
) => {
  const response = await axios.get(
    `${API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m,weather_code`,
    {},
  );
  return response.data;
};

export const getLatitudeLongitude = async (location: string) => {
  const response = await axios.get(
    `${GEOCODING_API_URL}/search?name=${location}`,
    {},
  );
  return response.data.results[0];
};
