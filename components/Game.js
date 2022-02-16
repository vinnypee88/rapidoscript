import { useContext, useEffect, createRef, useState } from "react";
import { WordsContext } from "../context/WordsContext";
import { TimeContext } from "../context/TimeContext";
import StopClock from "./StopClock";
import styles from "../styles/game.module.css";

const Game = () => {
  const { wordsColor, updateColor, setWordsColor, textObjectsArray } =
    useContext(WordsContext);
  const { time, start, stop, reset } = useContext(TimeContext);

  const [index, setIndex] = useState(0);

  const page = createRef();
  useEffect(() => {
    page.current.focus();
  }, []);

  const typed = (e) => {
    if (index < wordsColor.length) {
      if (e.key === wordsColor[index].letter) {
        updateColor("text-success", index);
        setIndex(index + 1);
      } else {
        updateColor("text-danger", index);
        setIndex(index + 1);
      }
      check();
    }
  };

  const check = () => {
    if (index === wordsColor.length - 1) {
      stop();
    }
    start();
  };

  const restart = () => {
    reset();
    setWordsColor(textObjectsArray);
    setIndex(0);
    page.current.focus();
  };

  return (
    <>
      <div ref={page} onKeyPress={typed} tabIndex="0" className="container">
        <p id={styles.paragraph} className="fs-4 fw-bold">
          {wordsColor.map((letter, index) => {
            return (
              <span key={index} className={letter.color}>
                {letter.letter}
              </span>
            );
          })}
        </p>
      </div>
      <StopClock />
      <div className="d-flex justify-content-center">
        <button
          class="btn btn-warning border border-3 border-primary fw-bold text-primary"
          onClick={restart}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Game;
