import { useMemo, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { CSSTransition } from "react-transition-group";

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
    if (isError) {
      return <p>{errorMsg}</p>;
    }
  }, [errorMsg, isError, isLoaded, isLoading, renderCurrentWeatherData]);

  const renderAnimation = useMemo(
    () => (
      <CSSTransition
        nodeRef={currentWeather}
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
        unmountOnExit
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
      </CSSTransition>
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
          {<TiWeatherCloudy size={32} />}
        </button>
      ),
    [isOpen, onFetchCurrentWeatherBtnClick]
  );

  return (
    <aside>
      {renderShowBtn}
      {renderAnimation}
    </aside>
  );
};

export default WeatherCurrent;
