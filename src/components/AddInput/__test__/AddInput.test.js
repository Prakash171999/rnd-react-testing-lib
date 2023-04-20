import { render, screen } from "@testing-library/react";
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
