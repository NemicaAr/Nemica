import { HashRouter, Routes, Route } from "react-router";
import Home from "./Home";
import MariaLauraFigari from "./pages/MariaLauraFigari";

export default function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MariaLauraFigari" element={<MariaLauraFigari />} />
      </Routes>
    </HashRouter>
  );
}
