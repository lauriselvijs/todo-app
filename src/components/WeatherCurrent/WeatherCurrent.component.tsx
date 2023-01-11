import { useState } from "react";
import { useSelector } from "react-redux";
import { useFetchCurrentWeather } from "../../hooks/Weather.hook";
import { RootState } from "../../store/app/store";
import "./WeatherCurrent.style.scss";

const WeatherCurrent = () => {
  const {
    dark: { darkMode },
    weather: {
      current: {
        temp_c,
        temp_f,
        condition: { text, icon },
        wind_mph,
        wind_kph,
        wind_dir,
        humidity,
      },
      loading,
      loaded,
      error: { message: currentWeatherErrorMsg },
    },
  } = useSelector((state: RootState) => state);

  const [metric, setMetric] = useState<boolean>(false);

  useFetchCurrentWeather();

  const onMeasurementUnitBtnClick = (): void => {
    setMetric(!metric);
  };

  return (
    <div className={darkMode ? "weather-current-dark-mode" : "weather-current"}>
      {loading || !loaded ? (
        <div className="weather-current-loader">Loading...</div>
      ) : (
        <>
          {currentWeatherErrorMsg ? (
            <>{currentWeatherErrorMsg}</>
          ) : (
            <>
              <div className="weather-current-info-main">
                <p>
                  <img src={icon} alt="Current weather" title={text} />
                </p>
                <div className="weather-current-temperature-container">
                  <p className="weather-current-temperature">
                    {metric ? Math.round(temp_f) : Math.round(temp_c)}
                  </p>
                  <button
                    className="weather-current-unit-btn"
                    onClick={onMeasurementUnitBtnClick}
                  >
                    &deg;
                    {metric ? "F" : "C"}
                  </button>
                </div>
              </div>
              <div className="weather-current-add--info">
                <p>
                  Wind{" "}
                  {metric
                    ? Math.round(wind_mph) + " mph"
                    : Math.round(wind_kph) + " kph"}
                </p>
                <p>Wind Direction {wind_dir}</p>
                <p>Humidity {humidity} %</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherCurrent;
