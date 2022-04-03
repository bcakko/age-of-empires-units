import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Units from "./pages/Units";
import UnitDetails from "./pages/UnitDetails";

import NotFound from "./pages/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="units" element={<Units />} />
        <Route path="/unit-details/:unitId" element={<UnitDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
