import {
  addListener,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { todoListeners } from "../../../features/Todo";
import { AppDispatch, RootState } from "../../store";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

todoListeners(startAppListening);
