export interface Weather {
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  condition: {
    text: string;
    icon: string;
  };
  wind: {
    mph: number;
    kph: number;
    dir: string;
  };
  humidity: number;
}
