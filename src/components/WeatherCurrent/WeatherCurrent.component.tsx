import { useMemo, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";

import Animation from "../shared/Animation";
import {
  WEATHER_CURRENT_ANIMATION_LENGTH,
  WEATHER_CURRENT_ICON_SIZE,
} from "./WeatherCurrent.config";

import { useWeatherCurrent } from "./WeatherCurrent.hook";
import styles from "./WeatherCurrent.style.module.scss";

const WeatherCurrent = () => {
  const {
    currentWeather: {
      temperature: { fahrenheit, celsius },
      condition: { text, icon },
      wind: {
        speed: { mph, kph },
        dir,
      },
      humidity,
    },
    metricUnits,
    imperialUnits,
    isLoaded,
    isLoading,
    isError,
    isOpen,
    error: {
      error: { message: errorMsg },
    },

    onCloseBtnClick,
    onMetricUnitsBtnClick,
    onImperialUnitsBtnClick,
    onFetchCurrentWeatherBtnClick,
  } = useWeatherCurrent();
  const currentWeather = useRef<HTMLDivElement>(null);

  //TODO:
  // [ ] - Move logic to hook
  const renderTemperature = useMemo(() => {
    if (metricUnits) {
      return <h2>{celsius}</h2>;
    }
    if (imperialUnits) {
      return <h2>{fahrenheit}</h2>;
    }
  }, [metricUnits, imperialUnits, celsius, fahrenheit]);

  const renderWindSpeed = useMemo(() => {
    if (metricUnits) {
      return <p>{kph} kph</p>;
    }
    if (imperialUnits) {
      return <p>{mph} mph</p>;
    }
  }, [metricUnits, imperialUnits, kph, mph]);

  // TODO:
  // [ ] - Replace text with const
  const renderCurrentWeatherData = useMemo(
    () => (
      <div className={styles.data}>
        <div className={styles.main}>
          <img src={icon} alt="Current weather" title={text} />
          <div className={styles.temperature}>
            {renderTemperature}
            <button
              aria-label="Set metric units"
              className={metricUnits ? styles.unitBtnSelected : styles.unitBtn}
              onClick={onMetricUnitsBtnClick}
            >
              &deg; C
            </button>
            |
            <button
              aria-label="Set imperial units"
              className={
                imperialUnits ? styles.unitBtnSelected : styles.unitBtn
              }
              onClick={onImperialUnitsBtnClick}
            >
              &deg; F
            </button>
          </div>
        </div>
        <div className={styles.info}>
          {renderWindSpeed}
          <p>Wind Direction {dir}</p>
          <p>Humidity {humidity} %</p>
        </div>
      </div>
    ),
    [
      dir,
      humidity,
      icon,
      imperialUnits,
      metricUnits,
      onImperialUnitsBtnClick,
      onMetricUnitsBtnClick,
      renderTemperature,
      renderWindSpeed,
      text,
    ]
  );

  const renderCurrentWeather = useMemo(() => {
    if (isLoading) {
      return <div className={styles.spinner} />;
    }
    if (isLoaded) {
      return renderCurrentWeatherData;
    }

    //TODO:
    // [ ] - Check if working
    if (isError) {
      return <p>{errorMsg}</p>;
    }
  }, [errorMsg, isError, isLoaded, isLoading, renderCurrentWeatherData]);

  const renderAnimation = useMemo(
    () => (
      <Animation
        nodeRef={currentWeather}
        show={isOpen}
        timeout={WEATHER_CURRENT_ANIMATION_LENGTH}
        styles={styles}
      >
        <div ref={currentWeather} className={styles.weatherCurrent}>
          {renderCurrentWeather}
          <button
            title="Close"
            aria-label="Close"
            className={styles.closeBtn}
            onClick={onCloseBtnClick}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
      </Animation>
    ),
    [isOpen, onCloseBtnClick, renderCurrentWeather]
  );

  const renderShowBtn = useMemo(
    () =>
      !isOpen && (
        <button
          title="Show current weather"
          aria-label="Show current weather"
          className={styles.showBtn}
          onClick={onFetchCurrentWeatherBtnClick}
        >
          <TiWeatherCloudy
            aria-hidden="true"
            size={WEATHER_CURRENT_ICON_SIZE}
          />
        </button>
      ),
    [isOpen, onFetchCurrentWeatherBtnClick]
  );

  return (
    <>
      {renderShowBtn}
      {renderAnimation}
    </>
  );
};

export default WeatherCurrent;
