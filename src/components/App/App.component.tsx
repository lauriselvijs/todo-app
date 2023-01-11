import DarkModeBtn from "../DarkModeBtn";
import Header from "../HeaderWrapper/HeaderWrapper.component";
import Todo from "../Todo";
import TodoHero from "../TodoHero";
import TodoTitle from "../TodoTItle";
import WeatherCurrent from "../WeatherCurrent";

const App = () => {
  const currentWeatherData = getCurrentWeatherData(location);

  return (
    <>
      <div>Test</div>
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
