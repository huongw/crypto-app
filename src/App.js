import "./App.css";
import Pages from "./pages/Pages";
import { NavBar } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Pages />
      </Router>
    </>
  );
}

export default App;
