import { useContext } from "react";
import InputContext from "../InputContext";

import CoinList from "../components/CoinList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { CoinsProvider } from "../CoinsContext";

const Home = () => {
  const { input, onInputChange } = useContext(InputContext);

  return (
    <>
      <SearchBar onInputChange={onInputChange} />
      <Header />
      <CoinsProvider>
        <CoinList input={input} />
      </CoinsProvider>
    </>
  );
};

export default Home;
