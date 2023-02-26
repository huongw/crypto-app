import "./App.css";
import Pages from "./pages/Pages";

import { BrowserRouter as Router } from "react-router-dom";
import { RiCoinsLine } from "react-icons/ri";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="logo">
          <RiCoinsLine />
          <h1>Crypto <span className="logo-color">Hive</span></h1>
        </div>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
