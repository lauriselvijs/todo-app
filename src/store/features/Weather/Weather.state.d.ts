import { CurrentWeather } from "../../../types/Weather.d";
import { Error } from "./Weather.slice.d";

export interface WeatherState {
  currentWeather: CurrentWeather;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
  error: Error;
}
