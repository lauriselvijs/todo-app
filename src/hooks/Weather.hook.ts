import { bindActionCreators, SerializedError } from "@reduxjs/toolkit";
import { useAppDispatch } from "./TodoActions.hook";
import { weatherActions } from "../store/features/Weather/weather.slice";
import { ipActions } from "../store/features/Ip/ip.slice";
import { useEffect, useState } from "react";

export const useFetchCurrentWeather = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const { getIp } = ipActions;
  const { getCurrentWeather } = bindActionCreators(weatherActions, dispatch);

  const getWeather = async () => {
    try {
      const { ip } = await dispatch(getIp()).unwrap();
      getCurrentWeather(ip);
    } catch (err: any) {
      const error: SerializedError = err;

      error.name && setError(error.name);
      return error;
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return error;
};
