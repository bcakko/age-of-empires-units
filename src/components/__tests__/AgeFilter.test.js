import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AgeFilter from "../Filters/AgeFilter";
import UnitsList from "../UnitsList";
import store from "../../store";

describe("Testing AgeFilter mounting and functionality", () => {
  test("should render AgeFilter component", () => {
    render(
      <Provider store={store}>
        <AgeFilter />
      </Provider>
    );
    const ageFilter = screen.getByTestId("age-filter");
    const castleRadioInput = screen.getByTestId("castle-radio");
    expect(ageFilter).toBeInTheDocument();
    expect(ageFilter).toContainElement(castleRadioInput);
  });

  test("should update content on input click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AgeFilter />
          <UnitsList />
        </BrowserRouter>
      </Provider>
    );
    const unitsList = screen.getByTestId("units-list");
    const castleRadioInput = screen.getByTestId("castle-radio");

    fireEvent.click(castleRadioInput);
    
    expect(unitsList).toHaveTextContent("Woad Raider");
    expect(unitsList).not.toHaveTextContent("Heavy Cavalry Archer");
  });
});
