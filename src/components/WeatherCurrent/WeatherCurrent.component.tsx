import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { weatherSliceName } from "../../store/features/Weather";
import "./WeatherCurrent.style.module.scss";

const WeatherCurrent = () => {
  const {
    weather: {
      temperature: { fahrenheit, celsius },
      condition: { text, icon },
      wind: { mph, kph, dir },
      humidity,
    },
    loading,
    loaded,
    error: {
      status,
      error: { message },
    },
  } = useSelector((state: RootState) => state[weatherSliceName]);

  const [metric, setMetric] = useState<boolean>(false);

  const onMeasurementUnitBtnClick = (): void => {
    setMetric(!metric);
  };

  return (
    <div className="weather-current">
      {loading || !loaded ? (
        <div className="weather-current-loader">Loading...</div>
      ) : (
        <>
          {message ? (
            <>{message}</>
          ) : (
            <>
              <div className="weather-current-info-main">
                <p>
                  <img src={icon} alt="Current weather" title={text} />
                </p>
                <div className="weather-current-temperature-container">
                  <p className="weather-current-temperature">
                    {metric && fahrenheit
                      ? Math.round(fahrenheit)
                      : celsius && Math.round(celsius)}
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
                  {metric && mph
                    ? Math.round(mph) + " mph"
                    : kph && Math.round(kph) + " kph"}
                </p>
                <p>Wind Direction {dir}</p>
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
