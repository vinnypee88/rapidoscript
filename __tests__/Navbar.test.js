import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders a NavBar", () => {
    render(<Navbar />);

    const heading = screen.getByText(/script/);

    expect(heading).toBeInTheDocument();
  });
});
