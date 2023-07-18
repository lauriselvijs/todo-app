import { useMemo, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";

import Animation from "../shared/Animation";

import {
  WEATHER_CLOSE_ICON_SIZE,
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
    t,
    ns: { ui },
    onCloseBtnClick,
    onMetricUnitsBtnClick,
    onImperialUnitsBtnClick,
    onFetchCurrentWeatherBtnClick,
  } = useWeatherCurrent();
  const currentWeather = useRef<HTMLDivElement>(null);

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
      return (
        <p>
          {kph} {t("kph", { ns: ui })}
        </p>
      );
    }
    if (imperialUnits) {
      return (
        <p>
          {mph} {t("mph", { ns: ui })}
        </p>
      );
    }
  }, [metricUnits, imperialUnits, kph, mph, t, ui]);

  const metricUnitBtnStyle = useMemo(
    () => (metricUnits ? styles.unitBtnSelected : styles.unitBtn),
    [metricUnits]
  );
  const imperialUnitBtnStyle = useMemo(
    () => (imperialUnits ? styles.unitBtnSelected : styles.unitBtn),
    [imperialUnits]
  );

  // TODO:
  // [ ] - Replace text with const
  const renderCurrentWeatherData = useMemo(
    () => (
      <div className={styles.data}>
        <div className={styles.main}>
          <img src={icon} alt={t("Current weather", { ns: ui })} title={text} />
          <div className={styles.temperature}>
            {renderTemperature}
            <button
              aria-label={t("Set metric units", { ns: ui })}
              className={metricUnitBtnStyle}
              onClick={onMetricUnitsBtnClick}
            >
              &deg; C
            </button>
            |
            <button
              aria-label={t("Set imperial units", { ns: ui })}
              className={imperialUnitBtnStyle}
              onClick={onImperialUnitsBtnClick}
            >
              &deg; F
            </button>
          </div>
        </div>
        <div className={styles.info}>
          {renderWindSpeed}
          <p>
            {t("Wind Direction", { ns: ui })} {dir}
          </p>
          <p>
            {t("Humidity", { ns: ui })} {humidity} %
          </p>
        </div>
      </div>
    ),
    [
      dir,
      humidity,
      icon,
      imperialUnitBtnStyle,
      metricUnitBtnStyle,
      onImperialUnitsBtnClick,
      onMetricUnitsBtnClick,
      renderTemperature,
      renderWindSpeed,
      text,
      t,
      ui,
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

  const renderShowBtn = useMemo(
    () =>
      !isOpen && (
        <button
          title={t("Show current weather", { ns: ui })}
          aria-label={t("Show current weather", { ns: ui })}
          className={styles.showBtn}
          onClick={onFetchCurrentWeatherBtnClick}
        >
          <TiWeatherCloudy
            aria-hidden="true"
            size={WEATHER_CURRENT_ICON_SIZE}
          />
        </button>
      ),
    [isOpen, onFetchCurrentWeatherBtnClick, t, ui]
  );

  const renderShowWeather = useMemo(
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
            title={t("Close", { ns: ui })}
            aria-label={t("Close", { ns: ui })}
            className={styles.closeBtn}
            onClick={onCloseBtnClick}
          >
            <AiOutlineClose size={WEATHER_CLOSE_ICON_SIZE} />
          </button>
        </div>
      </Animation>
    ),
    [isOpen, onCloseBtnClick, renderCurrentWeather, t, ui]
  );

  return (
    <>
      {renderShowBtn}
      {renderShowWeather}
    </>
  );
};

export default WeatherCurrent;
