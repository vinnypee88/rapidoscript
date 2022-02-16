import WordsContextProvider from "../context/WordsContext";
import "../styles/globals.css";
import TimeContextProvider from "../context/TimeContext";

function MyApp({ Component, pageProps }) {
  return (
    <WordsContextProvider>
      <TimeContextProvider>
        <Component {...pageProps} />
      </TimeContextProvider>
    </WordsContextProvider>
  );
}

export default MyApp;
