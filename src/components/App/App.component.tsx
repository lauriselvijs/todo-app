import Footer from "../Footer";
import Header from "../Header";
import Todo from "../Todo";
import WeatherCurrent from "../WeatherCurrent";

// TODO:
// [ ] - Create containers for header, aside, main and footer
const App = () => {
  return (
    <>
      <Header />
      <WeatherCurrent />
      <Todo />
      <Footer />
    </>
  );
};

export default App;
