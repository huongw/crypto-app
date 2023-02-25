import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CoinsContext = createContext();

export function CoinsProvider({ children }) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <CoinsContext.Provider value={{ coins }}>
      {children}
    </CoinsContext.Provider>
  );
}

export default CoinsContext;
