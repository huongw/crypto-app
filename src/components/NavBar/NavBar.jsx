import "./NavBar.css";
import { RiCoinsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <RiCoinsLine />
        <h1>
          <span className="logo-color">Crypto</span>Hive
        </h1>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink exact="true" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/coins"}>Coins</NavLink>
        </li>
        <li>
          <NavLink to={"/news"}>Crypto News</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
