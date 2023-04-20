import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders learn react header", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByText(/My todo header/i);

  //This will also pass as a part of the text i.e header is present
  //const headerElement = screen.getByText(/header/i);

  expect(headerElement).toBeInTheDocument();
});

/**
 * Incase of having multiple headers this test will fail.
 * 
 *  <>
      <h1 className="header">{title}</h1>
      <h1 className="header">Cats</h1>
    </>
 */

// it("should render same text passed into title prop", () => {
//   render(<Header title={"My todo header"} />);
//   const headerElement = screen.getByRole("heading");
//   expect(headerElement).toBeInTheDocument();
// });

/**
 *So for more specific test you can specify what text you want to get over heading role.
 *You can do that by specifying an object and giving the name.
 */
it("should render same text passed into title prop", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByRole("heading", {
    name: "My todo header",
  });
  expect(headerElement).toBeInTheDocument();
});

it("get by title", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByTitle("header");
  expect(headerElement).toBeInTheDocument();
});
