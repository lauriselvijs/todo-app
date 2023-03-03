import { rest } from "msw";
import {
  WeatherApiType,
  WEATHER_API_URL,
} from "../../services/Weather/Weather.config";
import { CurrentWeatherServiceResponse } from "../../services/Weather/Weather.service.d";

export const currentWeatherServerHandler = rest.get(
  `${WEATHER_API_URL}${WeatherApiType.CURRENT}`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<CurrentWeatherServiceResponse>({
        current: {
          temp_c: 0,
          temp_f: 0,
          condition: { text: "", icon: "" },
          wind_mph: 0,
          wind_kph: 0,
          wind_dir: "",
          humidity: 0,
        },
      })
    );
  }
);
