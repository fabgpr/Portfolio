import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import mailReducer from "../reducer/mailReducer";

const store = configureStore({
  reducer: {
    mailReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}
