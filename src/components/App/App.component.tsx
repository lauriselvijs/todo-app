import Author from "../Author";
import Todo from "../Todo";
import WeatherCurrent from "../WeatherCurrent";

const App = () => {
  return (
    <>
      <header />
      <aside>
        <WeatherCurrent />
      </aside>
      <main>
        <Todo />
      </main>
      <footer>
        <Author />
      </footer>
    </>
  );
};

export default App;
