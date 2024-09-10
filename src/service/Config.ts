import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1';
export const getWeatherForecast = async (
  latitude: number,
  longitude: number,
) => {
  const response = await axios.get(
    `${API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&=temperature_2m&forecast_days=7&daily=temperature_2m_max,weather_code`,
    {},
  );
  return response.data;
};
