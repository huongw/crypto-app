import { useState } from "react";
import { Coins, SearchBar, Header, Select } from "../index";
import "./CoinsPage.css";

const CoinsPage = ({
  isLoading,
  setIsLoading,
  error,
  setError,
  currency,
  setCurrency,
}) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <SearchBar onInputChange={onInputChange} />
      <Select
        currency={currency}
        onCurrencyChange={(e) => setCurrency(e.target.value)}
      />
      <Header />
      <Coins
        input={input}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={setError}
        error={error}
        currency={currency}
      />
    </>
  );
};

export default CoinsPage;
