import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import News from "./components/News/News";
import Sport from "./components/Sport/Sport";
import Science from "./components/Science/Science";
import NavBar from "./components/NavBar/NavBar";
import Politics from "./components/Politics/Politics";
import ErrorPage from "./components/ErrorPage";
import Entertainment from "./components/Entertainment/Entertainment";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/science" element={<Science />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
