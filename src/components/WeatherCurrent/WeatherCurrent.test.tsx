import userEvent from "@testing-library/user-event";
import { act, cleanup, screen } from "@testing-library/react";

import WeatherCurrent from "./WeatherCurrent.component";
import { rest, server } from "../../tests/mocks/Server.mock";
import {
  WeatherApiType,
  WEATHER_API_URL,
} from "../../services/Weather/Weather.config";
import { renderWithProviders } from "../../tests/config/Store.config";
import { CurrentWeatherServiceError } from "../../services/Weather/Weather.service.d";

const setup = () => {
  const showCurrentWeatherBtn = screen.getByRole("button", {
    name: "Show current weather",
  });
  return {
    showCurrentWeatherBtn,
  };
};

describe("Current weather", () => {
  it("should display errors", async () => {
    renderWithProviders(<WeatherCurrent />);

    server.use(
      rest.get(
        `${WEATHER_API_URL}${WeatherApiType.CURRENT}`,
        (req, res, ctx) => {
          return res(
            ctx.status(404),
            ctx.json<CurrentWeatherServiceError>({
              message: "Error",
            })
          );
        }
      )
    );

    const { showCurrentWeatherBtn } = setup();

    await userEvent.click(showCurrentWeatherBtn);

    const errorMsg = await screen.findByText(/Error/i);

    expect(errorMsg).toBeInTheDocument();

    cleanup();
  });

  it("should see wind direction text", async () => {
    renderWithProviders(<WeatherCurrent />);

    const { showCurrentWeatherBtn } = setup();

    await userEvent.click(showCurrentWeatherBtn);

    const windDirection = await screen.findByText(/Wind direction/i);

    expect(windDirection).toBeInTheDocument();

    cleanup();
  });
});
