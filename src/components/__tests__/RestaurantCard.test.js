import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard Component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});

test("Should render RestaurantCard with Veg Label", () => {
  const RestaurantVeg = withVegLabel(RestaurantCard);
  render(<RestaurantVeg resData={MOCK_DATA} />);

  const label = screen.getByTestId("vegLabel");

  expect(label).toBeInTheDocument();
});
