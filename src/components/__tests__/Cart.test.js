const {
  render,
  waitFor,
  screen,
  fireEvent,
} = require("@testing-library/react");
import { Provider } from "react-redux";
import RestaurantSection from "../RestaurantSection";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuItemsMockdata.json";
import "@testing-library/jest-dom";
// import appStore from "../../ReduxStore/appStore";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../ReduxStore/cartSlice";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

const createStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

let appStore;

beforeEach(() => {
  // Reset fetch mock before each test
  global.fetch.mockClear();

  // Reset Redux store state for each test
  appStore = createStore();
});

test("Should Load Restaurant Menu Component", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantSection />
    </Provider>
  );

  const resHeader = await waitFor(() => screen.getByTestId("header"));
  expect(resHeader).toBeInTheDocument();
});

test("Should Load Accordian Component", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantSection />
    </Provider>
  );

  const accordianHeader = await waitFor(() =>
    screen.getByText("Korean Range & New Offerings (20)")
  );
  expect(accordianHeader).toBeInTheDocument();
});

test("Should Load Accordian menu items on Clicking Accordian Component", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantSection />
    </Provider>
  );

  // Wait for the accordion header to be available
  const accordianHeader = await waitFor(() =>
    screen.getByText("Korean Range & New Offerings (20)")
  );
  expect(accordianHeader).toBeInTheDocument();

  // Click the accordion header
  fireEvent.click(accordianHeader);

  // Wait for food items to appear after the state change
  const foodCards = await screen.findAllByTestId("foodCard"); // Use `findByText` here
  expect(foodCards.length).toBe(20);
});

test("Should Check if add button is Loaded", async () => {
  render(
    <Provider store={appStore}>
      <RestaurantSection />
    </Provider>
  );

  // Wait for the accordion header to be available
  const accordianHeader = await waitFor(() =>
    screen.getByText("Korean Range & New Offerings (20)")
  );
  expect(accordianHeader).toBeInTheDocument();

  // Click the accordion header
  fireEvent.click(accordianHeader);

  // Wait for food items to appear after the state change
  const addBtn = await screen.findAllByTestId("addBtn"); // Use `findByText` here
  expect(addBtn.length).toBe(20);
});

test("Should Check if item is added to cart and change in header component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantSection />
      </Provider>
    </BrowserRouter>
  );

  // Wait for the accordion header to be available
  const accordianHeader = await waitFor(() =>
    screen.getByText("Korean Range & New Offerings (20)")
  );
  expect(accordianHeader).toBeInTheDocument();

  // Click the accordion header
  fireEvent.click(accordianHeader);

  const addBtn = await screen.findAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  const cart = screen.getByText("🛒 (1)");
  expect(cart).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  const cart2 = screen.getByText("🛒 (2)");
  expect(cart2).toBeInTheDocument();
});

test("Should Check if item is added to cart and Cart Component has those items", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantSection />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  // Wait for the accordion header to be available
  const accordianHeader = await waitFor(() =>
    screen.getByText("Korean Range & New Offerings (20)")
  );
  expect(accordianHeader).toBeInTheDocument();

  // Click the accordion header
  fireEvent.click(accordianHeader);

  const addBtn = await screen.findAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  const cartItems = await screen.findAllByTestId("cartItem");
  expect(cartItems.length).toBe(1);

  fireEvent.click(addBtn[2]);
  fireEvent.click(addBtn[3]);
  fireEvent.click(addBtn[4]);
  fireEvent.click(addBtn[5]);

  const newCartItems = await screen.findAllByTestId("cartItem");
  expect(newCartItems.length).toBe(5);
});
