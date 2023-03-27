import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>
          Welcome to <span className="logo-color">Crypto</span> Hive!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          repudiandae ullam voluptatibus ad incidunt quo magni tempore illo
          beatae officia inventore ducimus sapiente numquam, ex eveniet harum
          amet. Asperiores, harum?
        </p>
      </div>
      <div className="about-section">about</div>
      <div className="about-coins-section">
        <Link to={"/coins"}>Coins Page</Link>
      </div>
    </div>
  );
};

export default Home;
