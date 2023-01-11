import { AxiosError } from "axios";
import { useEffect } from "react";
import { getCurrentWeatherData } from "../../services/Weather/Weather.service";
import DarkModeBtn from "../DarkModeBtn";
import Header from "../HeaderWrapper/HeaderWrapper.component";
import Todo from "../Todo";
import TodoHero from "../TodoHero";
import TodoTitle from "../TodoTItle";
import WeatherCurrent from "../WeatherCurrent";

const App = () => {
  const getWeather = async () => {
    const currentWeatherData = await getCurrentWeatherData("");

    console.log(currentWeatherData);
  };

  return (
    <>
      <button onClick={getWeather}>Weather</button>
      {/* <WeatherCurrent />
      <Header>
        <TodoTitle />
        <DarkModeBtn />
        <TodoHero />
      </Header>
      <Todo /> */}
    </>
  );
};

export default App;
