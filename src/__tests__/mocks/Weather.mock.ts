import { rest } from "msw";
import weatherData from "../../store/features/Weather/Weather.initial-state";
import { WEATHER_API_URL } from "../constants/Weather.const";

export const weatherServerHandler = rest.get(
  WEATHER_API_URL,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(weatherData));
  }
);
