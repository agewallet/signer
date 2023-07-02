import React from 'react';
import {Provider} from 'react-redux';

// Store
import store from '../store/index';

const ProviderWrapper = (Component: any) => {
  return (props: any) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default ProviderWrapper;
