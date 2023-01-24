import { useEffect } from "react";
import { getIp } from "../../services/Ip";
import DarkModeBtn from "../DarkModeBtn";
import Header from "../Header";
import Todo from "../Todo";
import TodoHero from "../TodoHero";
import TodoTitle from "../TodoTItle";
import WeatherCurrent from "../WeatherCurrent";

const App = () => {
  return (
    <>
      {/* <WeatherCurrent /> */}
      <Header>
        <TodoTitle />
        <DarkModeBtn />
        <TodoHero />
      </Header>
      <Todo />
    </>
  );
};

export default App;
