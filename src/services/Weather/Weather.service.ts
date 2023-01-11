import axios from "axios";
import { Weather } from "../../types/Weather.d";
import {
  API_URL,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
} from "./Weather.config";
import { Response } from "./Weather.d";

export const getCurrentWeatherData = async (
  location: string
): Promise<Weather> => {
  const response = await axios.request<Response>({
    method: "GET",
    url: API_URL,
    params: { q: location },
    headers: {
      [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
      [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY_VALUE || "",
    },
  });

  const {
    temp_c,
    temp_f,
    condition: { icon, text },
    wind_mph,
    wind_kph,
    wind_dir,
    humidity,
  } = response.data.current;

  const transformedData = {
    temperature: {
      celsius: temp_c,
      fahrenheit: temp_f,
    },
    condition: {
      text,
      icon,
    },
    wind: {
      mph: wind_mph,
      kph: wind_kph,
      dir: wind_dir,
    },
    humidity,
  };

  return transformedData;
};
