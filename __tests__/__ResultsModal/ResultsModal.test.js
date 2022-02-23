import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../../components/Game";
import TimeContextProvider from "../../context/TimeContext";
import WordsContextProvider from "../../context/WordsContext";
import userEvent from "@testing-library/user-event";

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

  it("Displays the score modal when all the characters have been typed", () => {
    const modal = screen.queryByTestId("results-modal");
    expect(modal).toHaveAttribute("modalvisible", "false");
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(
      container,
      "const import export console.log let function class return if else props child length map filter true false null constructor this pop require push"
    );
    expect(modal).toHaveAttribute("modalvisible", "true");
    const scoreTile = screen.getByTestId("correct");
    expect(scoreTile.innerHTML).toBe("145");
    const scoreTileIncorrect = screen.getByTestId("incorrect");
    expect(scoreTileIncorrect.innerHTML).toBe("0");
  });
});
