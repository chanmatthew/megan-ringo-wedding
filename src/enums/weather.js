const { REACT_APP_WEATHER_API_KEY } = process.env;

export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?zip=11354,us&appid=${REACT_APP_WEATHER_API_KEY}`;
