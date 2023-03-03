import { PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { AppStore, persistedReducer, persistor } from "../../store/app/store";
import { listenerMiddleware } from "../../store/app/middleware/Listener";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(listenerMiddleware.middleware),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
