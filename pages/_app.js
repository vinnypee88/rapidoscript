import WordsContextProvider from "../context/WordsContext";
import "../styles/globals.css";
import TimeContextProvider from "../context/TimeContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <WordsContextProvider>
      <TimeContextProvider>
        <Component {...pageProps} />
      </TimeContextProvider>
    </WordsContextProvider>
  );
}

export default MyApp;
