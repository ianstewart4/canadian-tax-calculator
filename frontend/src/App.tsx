import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { CompareProvincesPage } from "./pages/CompareProvincesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/compare" element={<CompareProvincesPage />} />
      </Routes>
    </>
  );
}

export default App;
