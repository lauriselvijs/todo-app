import { Weather } from "../../../types/Weather.d";
import { WeatherError } from "./Weather.slice";

export interface InitialState {
  weather: Weather;
  loading: boolean;
  loaded: boolean;
  error: WeatherError;
}
