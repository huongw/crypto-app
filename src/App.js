import "./App.css";
import Pages from "./pages/Pages";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { TbCoin } from "react-icons/tb";

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
        <Pages />
      </Router>
    </div>
  );
}

export default App;
