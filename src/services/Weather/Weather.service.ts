import axios from "axios";
import {
  API_URL,
  CURRENT,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
} from "./Weather.config";
import { WeatherServiceResponse } from "./Weather.service.d";

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
