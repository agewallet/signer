import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

// Store
import store, { persistor } from "@store/index";

const ProviderWrapper = (Component: any) => {
  return (props: any) => (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
