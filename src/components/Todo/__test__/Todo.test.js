import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("todo", () => {
  it("Todo", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go on Long Vacation" },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go on Long Vacation/i);
    expect(divElement).toBeInTheDocument();
  });
});
