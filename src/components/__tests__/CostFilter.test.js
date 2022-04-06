import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import CostFilter from "../Filters/CostFilter";
import UnitsList from "../UnitsList";
import store from "../../store";

afterEach(() => {
  cleanup();
});

describe("Testing CostFilter mounting and functionality", () => {
  test("should render CostFilter component", () => {
    render(
      <Provider store={store}>
        <CostFilter />
      </Provider>
    );

    const costFilter = screen.getByTestId("cost-filter");
    
    expect(costFilter).toBeInTheDocument();
  });

  test("should update content on food range changes", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CostFilter />
          <UnitsList />
        </BrowserRouter>
      </Provider>
    );
    const foodCheckboxInput = screen.getByTestId("food-checkbox");
    const minRangeInput = screen.getByTestId("food-range-input-lower");
    const maxRangeInput = screen.getByTestId("food-range-input-higher");
    const unitsList = screen.getByTestId("units-list");

    fireEvent.click(foodCheckboxInput);

    fireEvent.change(minRangeInput, {
      target: {
        value: "80",
      },
    });
    fireEvent.change(maxRangeInput, {
      target: {
        value: "85",
      },
    });

    expect(unitsList).toHaveTextContent("Teutonic Knight");
    expect(unitsList).toHaveTextContent("Petard");
    expect(unitsList).not.toHaveTextContent("Spearman");
  });

  test("should update content on wood range changes", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CostFilter />
          <UnitsList />
        </BrowserRouter>
      </Provider>
    );
    const woodCheckboxInput = screen.getByTestId("wood-checkbox");
    const minRangeInput = screen.getByTestId("wood-range-input-lower");
    const maxRangeInput = screen.getByTestId("wood-range-input-higher");
    const unitsList = screen.getByTestId("units-list");

    fireEvent.click(woodCheckboxInput);

    fireEvent.change(minRangeInput, {
      target: {
        value: "100",
      },
    });
    fireEvent.change(maxRangeInput, {
      target: {
        value: "120",
      },
    });

    expect(unitsList).toHaveTextContent("Trade Cog");
    expect(unitsList).toHaveTextContent("War Wagon");
    expect(unitsList).not.toHaveTextContent("Transport Ship");
  });

  test("should update content on gold range changes", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CostFilter />
          <UnitsList />
        </BrowserRouter>
      </Provider>
    );
    const goldCheckboxInput = screen.getByTestId("gold-checkbox");
    const minRangeInput = screen.getByTestId("gold-range-input-lower");
    const maxRangeInput = screen.getByTestId("gold-range-input-higher");
    const unitsList = screen.getByTestId("units-list");

    fireEvent.click(goldCheckboxInput);

    fireEvent.change(minRangeInput, {
      target: {
        value: "140",
      },
    });
    fireEvent.change(maxRangeInput, {
      target: {
        value: "150",
      },
    });

    expect(unitsList).toHaveTextContent("Cannon Galleon");
    expect(unitsList).toHaveTextContent("Elite Cannon Galleon");
    expect(unitsList).not.toHaveTextContent("Siege Onager");
  });

  test("should render warning when no units found", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CostFilter />
          <UnitsList />
        </BrowserRouter>
      </Provider>
    );
    const foodCheckboxInput = screen.getByTestId("food-checkbox");
    const minRangeInput = screen.getByTestId("food-range-input-lower");
    const maxRangeInput = screen.getByTestId("food-range-input-higher");
    const unitsList = screen.getByTestId("units-list");

    fireEvent.change(minRangeInput, {
      target: {
        value: "140",
      },
    });
    fireEvent.change(maxRangeInput, {
      target: {
        value: "150",
      },
    });

    expect(unitsList).toHaveTextContent("No units found.");
    expect(unitsList).not.toHaveTextContent("Teutonic Knight");
    expect(unitsList).not.toHaveTextContent("Petard");
    expect(unitsList).not.toHaveTextContent("Spearman");
  });
});
