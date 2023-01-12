import { useEffect } from "react";
import { getIp } from "../../services/Ip";
import { getCurrentWeatherData } from "../../services/Weather";
import DarkModeBtn from "../DarkModeBtn";
import Header from "../Header";
import Todo from "../Todo";
import TodoHero from "../TodoHero";
import TodoTitle from "../TodoTItle";
import WeatherCurrent from "../WeatherCurrent";

const App = () => {
  useEffect(() => {
    const fetchWeather = async () => {
      await getIp().then(async (ip) => {
        const weatherServiceResponse = await getCurrentWeatherData(ip);

        console.log(weatherServiceResponse);
      });
    };

    fetchWeather();
  }, []);

  return (
    <>
      {/* <WeatherCurrent /> */}
      {/* <Header>
        <TodoTitle />
        <DarkModeBtn />
        <TodoHero />
      </Header>
      <Todo /> */}
    </>
  );
};

export default App;
