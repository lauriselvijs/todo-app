import { IError } from "../../../types/Error.d";

interface IinitialStateWeather {
  current: {
    last_update: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_direction: string;
    humidity: number;
  };
  loading: boolean;
  error: IError["error"];
}

export default IinitialStateWeather;
