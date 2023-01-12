import { WeatherServiceResponse } from "../../../services/Weather/Weather.service.d";
import { Weather } from "../../../types/Weather";

export const SLICE_NAME = "weather";
export const GET_CURRENT_WEATHER_TYPE = `${SLICE_NAME}/getCurrentWeather`;

export const transformResponse = ({
  current,
}: WeatherServiceResponse): Weather => {
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
