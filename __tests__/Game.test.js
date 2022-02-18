import { render, screen } from "@testing-library/react";
import Game from "../components/Game";
import "@testing-library/jest-dom";
import TimeContextProvider from "../context/TimeContext";
import WordsContextProvider from "../context/WordsContext";

describe("Game", () => {
  it("renders a stop clock at 00:00", () => {
    render(
      <WordsContextProvider>
        <TimeContextProvider>
          <Game />
        </TimeContextProvider>
      </WordsContextProvider>
    );

    const clock = screen.getAllByText(/00/);
    console.log(clock);

    expect(clock.length).toEqual(4);
  });
});
