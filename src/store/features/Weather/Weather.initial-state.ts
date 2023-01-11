import { InitialState } from "../Weather/Weather.initial-state.d";

const initialState: InitialState = {
  current: {
    temp_c: null,
    temp_f: null,
    condition: {
      text: "",
      icon: "",
    },
    wind_mph: null,
    wind_kph: null,
    wind_dir: "",
    humidity: null,
  },
  loading: false,
  loaded: false,
  error: {
    code: null,
    message: "",
  },
};

export default initialState;
