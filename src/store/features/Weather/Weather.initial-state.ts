import { InitialState } from "../Weather/Weather.initial-state.d";

const initialState = {
  weather: {
    temperature: {
      celsius: null,
      fahrenheit: null,
    },
    condition: {
      text: "",
      icon: "",
    },
    wind: {
      mph: null,
      kph: null,
      dir: "",
    },
    humidity: null,
  },
  loading: false,
  loaded: false,
  error: {
    status: null,
    error: {
      code: null,
      message: "",
    },
  },
};

export default initialState;
