import { Error } from "../../../types/Error.d";
import { Weather } from "../../../types/Weather.d";

export interface InitialState {
  current: Weather;
  loaded: boolean;
  loading: boolean;
  error: Error;
}
