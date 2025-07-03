import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../ReduxStore/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

test("Test to Check if Cart is rendered on screen with 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/(0)/);

  expect(cart).toBeInTheDocument();
});
