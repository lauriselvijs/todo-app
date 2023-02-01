import { CurrentWeatherServiceResponse } from "../../../services/Weather/Weather.service.d";
import { CurrentWeather } from "../../../types/Weather.d";

export const SLICE_NAME = "weather";
export const FETCH_CURRENT_WEATHER_TYPE = `${SLICE_NAME}/fetchCurrentWeather`;

export const transformResponse = ({
  current,
}: CurrentWeatherServiceResponse): CurrentWeather => {
  const {
    temp_c,
    temp_f,
    condition: { text, icon },
    wind_mph,
    wind_kph,
    wind_dir,
    humidity,
  } = current;

  const transformedData = {
    temperature: {
      celsius: Math.round(temp_c),
      fahrenheit: Math.round(temp_f),
    },
    condition: {
      text,
      icon,
    },
    wind: {
      speed: {
        kph: Math.round(wind_kph),
        mph: Math.round(wind_mph),
      },
      dir: wind_dir,
    },
    humidity,
  };

  return transformedData;
};
