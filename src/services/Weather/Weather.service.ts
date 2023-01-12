import axios from "axios";
import {
  API_URL,
  CURRENT,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
} from "./Weather.config";
import { CurrentWeatherServiceResponse } from "./Weather.service.d";

export const getCurrentWeather = async (
  location: string
): Promise<CurrentWeatherServiceResponse> => {
  try {
    const response = await axios.request<CurrentWeatherServiceResponse>({
      method: "GET",
      url: `${API_URL}${CURRENT}`,
      params: { q: location },
      headers: {
        [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
        [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY || "",
      },
    });

    return response.data;
  } catch (err: any) {
    throw err;
  }
};
