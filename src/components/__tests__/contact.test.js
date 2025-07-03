import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us test Cases", () => {
  test("Test to see if Contact Component is being rendered", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Test to see if 2 input boxes are being rendered", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });

  test("Test should load button onto the component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Test to fetch input box by placeholder (name)", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });
});
