import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../../components/DarkModeBtn";
import HeaderWrapper from "../../../components/HeaderWrapper";
import TodoHero from "../../../components/TodoHero";
import TodoTitle from "../../../components/TodoTItle";
import WeatherCurrent from "../../../components/WeatherCurrent";

const Layout = () => {
  return (
    <main>
      <WeatherCurrent />
      <TodoHero />
      <HeaderWrapper>
        <TodoTitle />
        <DarkModeBtn />
      </HeaderWrapper>
      <Outlet />
    </main>
  );
};

export default Layout;
