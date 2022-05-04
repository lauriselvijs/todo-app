import IinitialStateWeather from "./weather.initial-state.d";

const initialState: IinitialStateWeather = {
  current: {
    last_update: "",
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "",
      icon: "",
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_direction: "",
    humidity: 0,
  },
  loading: false,
  error: {
    code: 0,
    message: "",
  },
};

export default initialState;
