import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import UnitsList from "../UnitsList";

test("should render UnitsList component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <UnitsList />
      </BrowserRouter>
    </Provider>
  );
  const unitsList = screen.getByTestId("units-list");
  expect(unitsList).toBeInTheDocument();
  expect(unitsList).toHaveTextContent("Archer");
  expect(unitsList).toHaveTextContent("Feudal");
});
