import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Filters from "../Filters";
import store from "../../store";

test("should render Filters component", () => {
  render(
    <Provider store={store}>
      <Filters />
    </Provider>
  );
  const filtersElement = screen.getByTestId("filters");
  expect(filtersElement).toBeInTheDocument();
  expect(filtersElement).toHaveTextContent("Age");
});
