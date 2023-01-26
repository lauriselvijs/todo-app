import { WeatherState } from "./Weather.state.d";

const weatherState: WeatherState = {
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
      message: "",
    },
  },
};

export default weatherState;
