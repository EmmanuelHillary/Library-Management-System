import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store from '@/app/store';
import { persistor } from '@/app/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
  </Provider>
  )
}
 