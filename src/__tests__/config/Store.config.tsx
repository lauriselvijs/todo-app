import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../../store/app/store";

export const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {component}
      </PersistGate>
    </Provider>
  );
