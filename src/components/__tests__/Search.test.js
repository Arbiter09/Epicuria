const {
  render,
  screen,
  waitFor,
  fireEvent,
} = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/listOfResMockData.json";
import { Provider } from "react-redux";
import appStore from "../../ReduxStore/appStore";
import "@testing-library/jest-dom";

// Mock fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render Body Component with Search BOX", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  ); // No need for `act` now

  // Wait for the component to finish state updates after the fetch
  await waitFor(() => screen.getByPlaceholderText("Search restaurants...")); // `waitFor` ensures that the button is rendered after state updates

  // Now that the state has been updated, you can assert
  const searchBox = screen.getByPlaceholderText("Search restaurants...");
  expect(searchBox).toBeInTheDocument();
});

test("Should render Body Component with Search Button", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getByTestId("searchBtn"));

  const searchButton = screen.getByTestId("searchBtn");
  expect(searchButton).toBeInTheDocument();
});

test("Should update Body component after searching for burger", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );

  const searchInput = await waitFor(() => screen.getByTestId("searchInput"));
  const searchButton = await waitFor(() => screen.getByTestId("searchBtn"));

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const resCards = await waitFor(() => screen.getAllByTestId("resCard"));

  expect(resCards.length).toBe(4);
});

test("Should update Body component should have 16 resCard loaded initially", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );

  const resCards = await waitFor(() => screen.getAllByTestId("resCard"));

  expect(resCards.length).toBe(16);
});

test("Should result in 8 resCards after Clicking on top rated restaurants", async () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );

  const topRatedBtn = await waitFor(() => screen.getByTestId("topRated"));
  fireEvent.click(topRatedBtn);

  const resCards = await waitFor(() => screen.getAllByTestId("resCard"));
  expect(resCards.length).toBe(8);
});
