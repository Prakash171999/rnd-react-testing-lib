import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

/********************************* ACCESSIBLE BY EVERYONE  ***********************************/

const mockSetTodo = jest.fn();

describe("Add input", () => {
  it("Should render input element when changed.", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should be able to type in input.", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Go-Cart" } });
    expect(inputElement.value).toBe("Go Go-Cart");
  });

  it("Should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go Go-Cart" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
