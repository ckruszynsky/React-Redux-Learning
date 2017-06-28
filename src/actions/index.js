import axios from "axios";

const API_KEY = "58567dcb362a740cb4d9c6dd78353685";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  console.log(`Fetching weather for : ${city}`);
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log(`Returning action Fetch Weather with payload: ${request}`);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
