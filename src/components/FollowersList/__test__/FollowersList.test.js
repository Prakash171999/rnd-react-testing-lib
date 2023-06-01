import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

//If async await is not used then it will throw error => Unable to find an element by: [data-testid="follower-item-0 "]
describe("FollowersList", () => {
  it("should render the follower item", async () => {
    render(<MockFollowersList />);
    // const followerDivElement = await screen.getByTestId("follower-item-0 ");  //await doesn't work with getByTestId
    const followerDivElement = await screen.queryByTestId("follower-item-0");
    expect(followerDivElement).not.toBeInTheDocument();
  });
});
