import "./App.css";
import Pages from "./pages/Pages";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { TbCoin } from "react-icons/tb";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="logo">
          <TbCoin />
          <Link to="/">Crypto <span className="logo-color">Hive</span></Link>
        </div>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
