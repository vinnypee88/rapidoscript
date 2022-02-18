import { useContext, useEffect, createRef, useState } from "react";
import { WordsContext } from "../context/WordsContext";
import { TimeContext } from "../context/TimeContext";
import StopClock from "./StopClock";
import styles from "../styles/game.module.css";
import ResultsModal from "./ResultsModal";
import ScoreCard from "./ScoreCard";

const Game = () => {
  const { charsColor, updateColor, setCharsColor, charsObjectsArray } =
    useContext(WordsContext);
  const { time, start, stop, reset } = useContext(TimeContext);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const page = createRef();
  const resultModal = createRef();
  useEffect(() => {
    page.current.focus();
  }, []);

  const typed = (e) => {
    if (index < charsColor.length) {
      if (e.key === charsColor[index].letter) {
        updateColor("bg-success", index);
        setIndex(index + 1);
      } else if (e.key == "Backspace") {
        if (index > 0) {
          //logic for backspace
          updateColor("bg-none", index - 1);
          setIndex(index - 1);
        }
        if (index === 0) {
          updateColor("bg-none", index);
        }
      } else {
        updateColor("bg-danger", index);
        setIndex(index + 1);
      }
      check();
      let right = 0;
      let wrong = 0;
      charsColor.forEach((element) => {
        if (element.color === "bg-success") {
          right++;
        } else if (element.color === "bg-danger") {
          wrong++;
        }
      });
      setCorrect(right);
      setIncorrect(wrong);
    }
  };

  const check = () => {
    if (index === charsColor.length - 1) {
      stop();
      resultModal.current.click();
    }
    start();
  };

  const restart = () => {
    reset();
    setCharsColor(charsObjectsArray);
    setIndex(0);
    setCorrect(0);
    setIncorrect(0);
    page.current.focus();
  };

  return (
    <div ref={page} onKeyDown={typed} tabIndex="0" id={styles.game}>
      {/* Text display */}
      <div
        id={styles.tilesContainer}
        className="text-center container col-lg-8 my-4 border-0"
      >
        <p id={styles.paragraph} className=" fs-4 fw-bold">
          {charsColor.map((letter, index) => {
            return (
              <span key={index} className={letter.color}>
                {letter.letter}
              </span>
            );
          })}
        </p>
      </div>{" "}
      <ScoreCard correct={correct} incorrect={incorrect} restart={restart} />
      <StopClock />
      {/* Reset Button */}
      <div className="d-flex justify-content-center">
        <div
          className="rounded-pill border border-2 border-primary fw-bold text-primary bg-warning p-2"
          onClick={restart}
        >
          reset
        </div>
      </div>
      <ResultsModal
        time={time}
        correct={correct}
        incorrect={incorrect}
        restart={restart}
      />
      {/* modal button */}
      <p
        ref={resultModal}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        click modal
      </p>
    </div>
  );
};

export default Game;
