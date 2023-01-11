import axios, { AxiosError } from "axios";
import { Weather } from "../../types/Weather.d";
import {
  API_URL,
  CURRENT,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
} from "./Weather.config";

interface WeatherServiceResponse {
  current: {
    temp_c: null;
    temp_f: null;
    condition: {
      text: "";
      icon: "";
    };
    wind_mph: null;
    wind_kph: null;
    wind_dir: "";
    humidity: null;
  };
}

export const getCurrentWeatherData = async (
  location: string
): Promise<WeatherServiceResponse> => {
  try {
    const response = await axios.request<WeatherServiceResponse>({
      method: "GET",
      url: `${API_URL}${CURRENT}`,
      params: { q: location },
      headers: {
        [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
        [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY_VALUE || "",
      },
    });

    return response.data;
  } catch (err: any) {
    throw err;
  }
};
