import { render, screen } from "@testing-library/react";
import Header from "../Header";

/********************************* ACCESSIBLE BY EVERYONE  ***********************************/

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

/********************************* SEMANTIC QUERIES  ***********************************/

it("get by title", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByTitle("header");
  expect(headerElement).toBeInTheDocument();
});

/********************************* TEST ID  ***********************************/

//Use data-testid that is very specific for your id in the html element.
it("get by test id", () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.getByTestId("header-test");
  expect(headerElement).toBeInTheDocument();
});

/********************************************************************/

//The test will fail if async await is not used. As findBy queries are used for asynchronous work.
it("findBy text", async () => {
  render(<Header title={"My todo header"} />);
  const headerElement = await screen.findByText(/my todo header/i);
  expect(headerElement).toBeInTheDocument();
});

//QUERY BY
/*If you want to test that there isn't this element inside of our application with text "some text here"
 *than we would use queryBy method.*/
it("queryBy", async () => {
  render(<Header title={"My todo header"} />);
  const headerElement = screen.queryByText(/dogs/i);
  expect(headerElement).not.toBeInTheDocument();
});

it("get all by role", async () => {
  render(<Header title={"My todo header"} />);
  const headerElements = screen.getAllByRole("heading");
  expect(headerElements.length).toBe(2);
});
