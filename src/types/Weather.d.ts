export interface Weather {
  temperature: {
    celsius: number | null;
    fahrenheit: number | null;
  };
  condition: {
    text: string;
    icon: string;
  };
  wind: {
    mph: number | null;
    kph: number | null;
    dir: string | null;
  };
  humidity: number | null;
}

export interface WeatherError {
  status: number | null;
  error: {
    message: string;
  };
}
