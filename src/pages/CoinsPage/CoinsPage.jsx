import { useState } from "react";
import { Coins, SearchBar, Header } from "../index";
import "./CoinsPage.css";

const CoinsPage = () => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="container">
      <SearchBar onInputChange={onInputChange} />
      <Header />
      <Coins input={input} />
    </div>
  );
};

export default CoinsPage;
