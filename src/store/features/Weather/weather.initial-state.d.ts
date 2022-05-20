import { IError } from "../../../types/Error.d";

interface IinitialStateWeather {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_dir: string;
    humidity: number;
  };
  loaded: boolean;
  loading: boolean;
  error: IError;
}

export default IinitialStateWeather;
