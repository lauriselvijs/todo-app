import { bindActionCreators, SerializedError } from "@reduxjs/toolkit";
import { useAppDispatch } from "./TodoActions.hook";
import { weatherActions } from "../store/features/Weather/Weather.slice";
import { ipActions } from "../store/features/Ip/Ip.slice";
import { useEffect, useState } from "react";

export const useFetchCurrentWeather = () => {
  const [error, setError] = useState<string>("");
  const { getIp } = ipActions;
  const dispatch = useAppDispatch();
  const { getCurrentWeather } = bindActionCreators(weatherActions, dispatch);

  const getWeather = async () => {
    try {
      const { ip } = await dispatch(getIp()).unwrap();
      getCurrentWeather(ip);
    } catch (err: any) {
      const error: SerializedError = err;

      getCurrentWeather("");
      error.name && setError(error.name);
      return error;
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return error;
};
