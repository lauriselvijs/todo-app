import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { ipActions } from "../../store/features/Ip/ip.slice";
import { weatherActions } from "../../store/features/Weather/weather.slice";
import "./WeatherCurrent.style.scss";

const WeatherCurrent = () => {
  const {
    dark: { darkMode },
    weather: {
      current: {
        last_update,
        temp_c,
        temp_f,
        condition: { text, icon },
        wind_mph,
        wind_kph,
        wind_direction,
        humidity,
      },
      loading,
      error: { message },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { getIp } = bindActionCreators(ipActions, dispatch);
  const { getCurrentWeather } = bindActionCreators(weatherActions, dispatch);

  const [metric, setMetric] = useState<boolean>(false);

  useEffect(() => {
    // getIp();
    // getCurrentWeather("london");
  }, []);

  const onMeasurementUnitBtnClick = () => {
    setMetric(!metric);
  };

  return (
    <div className={darkMode ? "weather-current-dark-mode" : "weather-current"}>
      <div className="main-current-weather-info">
        <p>
          {text} {icon}
        </p>
        <div className="current-weather-temperature-container">
          <p className="current-weather-temperature">
            {metric ? temp_f : temp_c}
          </p>
          <button className="unit-btn" onClick={onMeasurementUnitBtnClick}>
            &deg;
            {metric ? "f" : "c"}
          </button>
        </div>
      </div>
      <div className="add-current-weather-info">
        <p>Wind {metric ? wind_mph + " mph" : wind_kph + " kph"}</p>
        <p>Wind Direction {wind_direction}</p>
        <p>Humidity {humidity} %</p>
        <p>Last Updated {last_update}</p>
      </div>
    </div>
  );
};

export default WeatherCurrent;
