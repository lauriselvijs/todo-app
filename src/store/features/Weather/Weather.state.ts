import { WeatherState } from "./Weather.state.d";

const weatherState: WeatherState = {
  currentWeather: {
    temperature: {
      celsius: null,
      fahrenheit: null,
    },
    condition: {
      text: "",
      icon: "",
    },
    wind: {
      speed: { mph: null, kph: null },
      dir: "",
    },
    humidity: null,
  },
  isLoading: false,
  isLoaded: false,
  isError: false,
  error: {
    status: null,
    error: {
      message: "",
    },
  },
};

export default weatherState;
