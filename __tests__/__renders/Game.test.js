import { render, screen } from "@testing-library/react";
import Game from "../../components/Game";
import "@testing-library/jest-dom";
import TimeContextProvider from "../../context/TimeContext";
import WordsContextProvider from "../../context/WordsContext";

describe("Game", () => {
  beforeEach(() => {
    render(
      <WordsContextProvider>
        <TimeContextProvider>
          <Game />
        </TimeContextProvider>
      </WordsContextProvider>
    );
  });

  it("renders a stop clock at 00:00", () => {
    const clock = screen.getAllByTestId("stopclock");
    clock.forEach((elem) => {
      expect(elem.innerHTML).toBe("00");
    });
  });
  it("starts the correct score with 0", () => {
    const correct = screen.getByTestId("correct");
    expect(correct.innerHTML).toBe("0");
  });
  it("starts the incorrect score with 0", () => {
    const incorrect = screen.getByTestId("incorrect");
    expect(incorrect.innerHTML).toBe("0");
  });
  it("renders the javascript words to type", () => {
    const words = screen.getByTestId("js-words");
    expect(words).toBeInTheDocument();
  });
  it("renders with the score modal hidden", () => {
    const modal = screen.queryByTestId("results-modal");
    expect(modal).toHaveAttribute("modalvisible", "false");
  });
  it("renders all letters with no background", () => {
    const words = screen.getAllByTestId("letters");
    words.forEach((letter) => {
      expect(letter).toHaveClass("bg-none");
    });
  });
});
