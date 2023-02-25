import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TbCoin } from "react-icons/tb";

import { InputProvider } from "./InputContext";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="logo">
          <Link to="/">
            Crypto Mania
            <TbCoin />
          </Link>
        </div>
        <InputProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </InputProvider>
      </Router>
    </div>
  );
}

export default App;
