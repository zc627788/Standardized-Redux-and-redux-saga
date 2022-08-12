import Root from './pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeConfig from './store/storeConfig';
function App() {
  const state = {
    store: storeConfig.store,
    persistor: storeConfig.persistor,
  };
  return (
    <>
      {console.log(state)}
      <Provider store={state.store}>
        <PersistGate loading={null} persistor={state.persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
