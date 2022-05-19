import IinitialStateWeather from "./weather.initial-state.d";

const initialState: IinitialStateWeather = {
  current: {
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "",
      icon: "",
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_dir: "",
    humidity: 0,
  },
  loading: false,
  error: {
    code: 0,
    message: "",
  },
};

export default initialState;
