import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../store/app/store";
import { render as rtlRender, RenderResult } from "@testing-library/react";
import { PersistGate } from "redux-persist/integration/react";

export const render = (
  component: ReactNode
): RenderResult<
  typeof import("/home/lauris/Desktop/todo-app/node_modules/@testing-library/dom/types/queries"),
  HTMLElement,
  HTMLElement
> =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {component}
      </PersistGate>
    </Provider>
  );
