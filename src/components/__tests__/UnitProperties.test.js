import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "../../App";
import store from "../../store";

afterEach(() => {
  cleanup();
});

describe("Testing routing and handling bad routes", () => {
  test("should navigate to Units and UnitDetails pages", async () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const user = userEvent.setup();
    expect(screen.getByText("Home")).toBeInTheDocument();

    await user.click(screen.getByText("Units"));
    const someUnit = screen.getByText("Chu Ko Nu");
    expect(someUnit).toBeInTheDocument();

    await user.click(someUnit);
    const UnitDetails = screen.getByTestId("unit-details");

    expect(screen.getByText(/73/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
    expect(screen.getByText(/35/i)).toBeInTheDocument();
    expect(screen.getByText(/Castle/i)).toBeInTheDocument();
    expect(screen.getByText(/85%/i)).toBeInTheDocument();
    expect(screen.getByText(/45/i)).toBeInTheDocument();
    expect(UnitDetails).toHaveTextContent(
      "Chinese unique unit. Archer with mediocre range. Shoots a volley of 2 extra arrows with 3 attack. Because of the multiple arrows the delay between starts of attacks is more (roughly 3.6)"
    );

    expect(screen.getByTestId("unit-details")).not.toHaveTextContent(
      "Spearman"
    );
  });

  test("should navigate to Units and UnitDetails pages", async () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const user = userEvent.setup();
    expect(screen.getByText("Home")).toBeInTheDocument();

    await user.click(screen.getByText("Units"));
    const someUnit = screen.getByText("Turkey");
    expect(someUnit).toBeInTheDocument();

    await user.click(someUnit);
    const UnitDetails = screen.getByTestId("unit-details");

    expect(screen.getByText(/44/i)).toBeInTheDocument();
    expect(screen.getByText(/Turkey/i)).toBeInTheDocument();
    expect(screen.getByText(/Alternative to sheep/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark/i)).toBeInTheDocument();
    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(UnitDetails).toHaveTextContent("-");
    expect(UnitDetails).not.toHaveTextContent("Spearman");
  });

  test("should return 404 page in case of bad url", () => {
    let history = createBrowserHistory();
    history.push("/some/bad/route");

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );
    act(() => {
      history.push("/units/156");
    });

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
