import { WeatherError, CurrentWeather } from "../../../types/Weather.d";

export interface WeatherState {
  currentWeather: CurrentWeather;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  error: WeatherError;
}
