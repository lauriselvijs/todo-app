import axios from "axios";
import {
  WEATHER_API_URL,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
  WeatherApiType,
} from "./Weather.config";
import { CurrentWeatherServiceResponse } from "./Weather.service.d";

const { CURRENT } = WeatherApiType;

export const fetchCurrentWeather = async (
  location: string
): Promise<CurrentWeatherServiceResponse> => {
  const response = await axios.request<CurrentWeatherServiceResponse>({
    method: "GET",
    url: `${WEATHER_API_URL}${CURRENT}`,
    params: { q: location },
    headers: {
      [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
      [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY || "",
    },
  });

  return response.data;
};
