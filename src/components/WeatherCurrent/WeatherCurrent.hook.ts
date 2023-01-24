import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../../hooks/Store";
import { currentWeatherUpdated } from "../../store/features/Weather";

export const useFetchCurrentWeather = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  // const { getCurrentWeather } = bindActionCreators(weatherActions, dispatch);

  // const getWeather = async () => {
  //   try {
  //     const { ip } = await dispatch(getIp()).unwrap();
  //     dispatch(getCurrentWeather(ip));
  //   } catch (err: any) {
  //     const error: SerializedError = err;

  //     getCurrentWeather("");
  //     error.name && setError(error.name);
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  return error;
};
