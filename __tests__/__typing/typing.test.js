import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../../components/Game";
import TimeContextProvider from "../../context/TimeContext";
import WordsContextProvider from "../../context/WordsContext";
import userEvent from "@testing-library/user-event";

describe("Typing", () => {
  beforeEach(() => {
    render(
      <WordsContextProvider>
        <TimeContextProvider>
          <Game />
        </TimeContextProvider>
      </WordsContextProvider>
    );
  });

  it("Changes the bg color of the letters appropriately when 'condt ' is typed", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "condt ");
    const letters = screen.getAllByTestId("letters");
    expect(letters[0]).toHaveClass("bg-success");
    expect(letters[1]).toHaveClass("bg-success");
    expect(letters[2]).toHaveClass("bg-success");
    expect(letters[3]).toHaveClass("bg-danger");
    expect(letters[4]).toHaveClass("bg-success");
    expect(letters[5]).toHaveClass("bg-success");
    expect(letters[6]).toHaveClass("bg-none");
  });

  it("Starts the stop clock when a user begins typing", () => {
    jest.useFakeTimers();
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "condt ");
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    const clock = screen.getAllByTestId("stopclock");
    expect(clock[1].innerHTML).not.toBe("00");
    jest.clearAllTimers();
  });
  it("increases the score card when a correct letter is typed", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "const");
    const scoreTile = screen.getByTestId("correct");
    expect(scoreTile.innerHTML).toBe("5");
  });
  it("decreases the score card when an incorrect letter is typed", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "cabcd");
    const scoreTile = screen.getByTestId("incorrect");
    expect(scoreTile.innerHTML).toBe("4");
  });
  it("reverts the previous key entry wehn back space is pressed, score is updated and tile color is reverted", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "conbt{backspace}{backspace}");
    const scoreTileCorrect = screen.getByTestId("correct");
    const scoreTileIncorrect = screen.getByTestId("incorrect");

    expect(scoreTileCorrect.innerHTML).toBe("3");
    expect(scoreTileIncorrect.innerHTML).toBe("0");

    const letters = screen.getAllByTestId("letters");
    expect(letters[0]).toHaveClass("bg-success");
    expect(letters[1]).toHaveClass("bg-success");
    expect(letters[2]).toHaveClass("bg-success");
    expect(letters[3]).toHaveClass("bg-none");
    expect(letters[4]).toHaveClass("bg-none");
  });
  it("does not break the game when backspace pressed as the first key", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "{backspace}{backspace}const");
    const letters = screen.getAllByTestId("letters");
    expect(letters[0]).toHaveClass("bg-success");
    expect(letters[1]).toHaveClass("bg-success");
    const scoreTile = screen.getByTestId("correct");
    expect(scoreTile.innerHTML).toBe("5");
  });
  it("resets the board (time, score, letters) when the reset button is pressed", () => {
    const container = screen.getByTestId("game-container");
    container.focus();
    userEvent.type(container, "constavdtsrdsv");
    const resetButton = screen.getByTestId("reset-button");
    resetButton.click();
    const letters = screen.getAllByTestId("letters");
    expect(letters[0]).toHaveClass("bg-none");
    expect(letters[1]).toHaveClass("bg-none");
    const scoreTile = screen.getByTestId("correct");
    expect(scoreTile.innerHTML).toBe("0");
    const scoreTileIncorrect = screen.getByTestId("incorrect");
    expect(scoreTileIncorrect.innerHTML).toBe("0");
  });
});
