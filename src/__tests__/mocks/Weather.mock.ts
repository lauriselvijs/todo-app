import { rest } from "msw";
import { WEATHER_API_URL } from "../../services/Weather/Weather.config";
import weatherData from "../../store/features/Weather/Weather.state";

export const weatherServerHandler = rest.get(
  WEATHER_API_URL,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(weatherData));
  }
);
