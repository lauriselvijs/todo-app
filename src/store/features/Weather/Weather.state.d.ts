import { WeatherError, CurrentWeather } from "../../../types/Weather.d";

export interface WeatherState {
  weather: CurrentWeather;
  loading: boolean;
  loaded: boolean;
  error: WeatherError;
}
