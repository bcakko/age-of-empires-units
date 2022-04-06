import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Units from "./pages/Units";
import UnitDetails from "./pages/UnitDetails";

import NotFoundPage from "./pages/NotFoundPage";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App" data-testid="app">
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/units" element={<Units />} />
        <Route path="/units/:unitId" element={<UnitDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
