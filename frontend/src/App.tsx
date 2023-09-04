import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Calculator } from "./pages/Calculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
