import { Weather } from "../../../types/Weather.d";
import { WeatherError } from "../../../types/Weather";

export interface InitialState {
  weather: Weather;
  loading: boolean;
  loaded: boolean;
  error: WeatherError;
}
