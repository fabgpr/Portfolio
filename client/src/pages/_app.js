import "../styles/globals.css";
import App from "@/redux/store/store";

function MyApp({ Component, pageProps }) {
  return <App Component={Component} pageProps={pageProps} />;
}

export default MyApp;
