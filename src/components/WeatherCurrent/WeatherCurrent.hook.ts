import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/Store";
import { RootState } from "../../store/app/store";
import {
  fetchCurrentWeather,
  weatherSliceName,
} from "../../store/features/Weather";

export const useWeatherCurrent = () => {
  const dispatch = useAppDispatch();

  const { currentWeather, isLoaded, isLoading, isError, error } = useSelector(
    (state: RootState) => state[weatherSliceName]
  );
  const [metricUnits, setMetricUnits] = useState<boolean>(true);
  const [imperialUnits, setImperialUnits] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMetricUnitsBtnClick = (): void => {
    setMetricUnits(true);
    setImperialUnits(false);
  };

  const onImperialUnitsBtnClick = (): void => {
    setImperialUnits(true);
    setMetricUnits(false);
  };

  const onFetchCurrentWeatherBtnClick = (): void => {
    setIsOpen(true);
    dispatch(fetchCurrentWeather());
  };

  const onCloseBtnClick = (): void => {
    setIsOpen(false);
  };

  return {
    onMetricUnitsBtnClick,
    onImperialUnitsBtnClick,
    onFetchCurrentWeatherBtnClick,
    onCloseBtnClick,
    currentWeather,
    error,
    metricUnits,
    imperialUnits,
    isLoaded,
    isLoading,
    isError,
    isOpen,
  };
};
