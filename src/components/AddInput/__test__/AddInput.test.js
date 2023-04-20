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
});

describe("Add input 2", () => {
  it("Should be able to type in input.", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Go-Cart" } });
    expect(inputElement.value).toBe("Go Go-Cart");
  });
});
