import WeatherCurrent from "./WeatherCurrent.component";
import { render, screen } from "@testing-library/react";
import { rest, server } from "../../__tests__/mocks/Server.mock";
import { WEATHER_API_URL } from "../../__tests__/constants/Weather.const";

test("Get Current Weather temperature celsius", async () => {
  render(<WeatherCurrent />);

  const tempC = await screen.findByText("0");
  expect(tempC).toBeInTheDocument();
});

test("Check if error", async () => {
  render(<WeatherCurrent />);

  server.use(
    rest.get(WEATHER_API_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  const tempC = await screen.findByText(/Loading.../i);
  expect(tempC).toBeInTheDocument();
});
