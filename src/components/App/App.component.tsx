import { Suspense } from "react";

import Author from "../Author";
import Todo from "../Todo";
import WeatherCurrent from "../WeatherCurrent";
import LoadingScreen from "../LoadingScreen";
import LangSwitcher from "../LangSwitcher";

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <header>
        <LangSwitcher />
      </header>
      <aside>
        <WeatherCurrent />
      </aside>
      <main>
        <Todo />
      </main>
      <footer>
        <Author />
      </footer>
    </Suspense>
  );
};

export default App;
