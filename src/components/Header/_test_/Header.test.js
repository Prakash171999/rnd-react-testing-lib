import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders learn react header", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByText(/My todo header/i);

  //This will also pass as a part of the text i.e header is present
  //const headerElement = screen.getByText(/header/i);

  expect(headerElement).toBeInTheDocument();
});

it("should render same text passed into title prop", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement).toBeInTheDocument();
});


