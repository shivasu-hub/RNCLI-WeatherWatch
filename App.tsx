import React from 'react';
import HomeScreen from './src/container';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
}
