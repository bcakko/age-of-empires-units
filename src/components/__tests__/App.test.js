import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "../../App";
import store from "../../store";

test("should render navigation and image", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const appComponent = screen.getByTestId("app");
  
  expect(appComponent).toBeInTheDocument();
  expect(appComponent).toHaveTextContent("Home");
  expect(appComponent).toHaveTextContent("Units");
});
