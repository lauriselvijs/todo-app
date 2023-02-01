import { useMemo } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FadeLoader } from "react-spinners";

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
    onMetricUnitsBtnClick,
    onImperialUnitsBtnClick,
    onFetchCurrentWeatherBtnClick,
  } = useWeatherCurrent();

  //TODO:
  // [ ] - move logic to hook
  const renderTemperature = useMemo(() => {
    if (metricUnits) {
      return <h2>{celsius}</h2>;
    } else if (imperialUnits) {
      return <h2>{fahrenheit}</h2>;
    }
  }, [metricUnits, imperialUnits, celsius, fahrenheit]);

  const renderWindSpeed = useMemo(() => {
    if (metricUnits) {
      return <p>{kph} kph</p>;
    } else if (imperialUnits) {
      return <p>{mph} mph</p>;
    }
  }, [metricUnits, imperialUnits, kph, mph]);

  if (isError) {
    return <div className={styles.weatherCurrent}>Error</div>;
  }

  if (isLoaded) {
    return (
      <div className={styles.weatherCurrent}>
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
    );
  }

  return (
    <button
      title="Show current weather"
      aria-label="Show current weather"
      className={styles.showBtn}
      onClick={onFetchCurrentWeatherBtnClick}
    >
      {!isLoading ? <FadeLoader /> : <TiWeatherCloudy size={32} />}
    </button>
  );
};

export default WeatherCurrent;
