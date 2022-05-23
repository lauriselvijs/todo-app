import axios from "axios";
import {
  WEATHER_API_URL,
  X_RAPID_API_HOST,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_KEY,
} from "../../constants/Weather.const";

export const getCurrentWeatherData = async (location: string) => {
  const response = await axios.request({
    method: "GET",
    url: WEATHER_API_URL,
    params: { q: location },
    headers: {
      [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
      [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY_VALUE
        ? process.env.REACT_APP_X_RAPID_API_KEY_VALUE
        : "",
    },
  });

  return response.data.current;
};
