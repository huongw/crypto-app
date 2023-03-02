import { useState } from "react";
import { SearchBar, Header, Coins } from "..";
import "./Home.css";

const Home = ({ isLoading, setIsLoading, error, setError }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <SearchBar onInputChange={onInputChange} />
      <Header />
      <Coins
        input={input}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={setError}
        error={error}
      />
    </>
  );
};

export default Home;
