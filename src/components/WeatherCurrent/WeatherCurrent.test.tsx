import { render } from "../../utils/Test.util";
import WeatherCurrent from "./WeatherCurrent.component";
import { screen } from "@testing-library/react";
import { rest, server } from "../../__test__/mocks/Server.mock";
import { WEATHER_API_URL } from "../../constants/Weather.const";

beforeEach(() => {
  render(<WeatherCurrent />);
});

test("Get Current Weather temperature celsius", async () => {
  const tempC = await screen.findByText("0");
  expect(tempC).toBeInTheDocument();
});

test("Check if error", async () => {
  server.use(
    rest.get(WEATHER_API_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  const tempC = await screen.findByText(/Loading.../i);
  expect(tempC).toBeInTheDocument();
});
