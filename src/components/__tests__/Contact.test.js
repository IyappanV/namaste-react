import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact Us Component", () => {
  render(<Contact />);

  const heading = screen.getByText("Submit");

  expect(heading).toBeInTheDocument();
});
