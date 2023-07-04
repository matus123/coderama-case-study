import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

function AppContainer() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}

export default AppContainer;
