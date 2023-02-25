import { createContext, useState } from "react";

const InputContext = createContext();

export function InputProvider({ children }) {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <InputContext.Provider value={{ input, onInputChange }}>
      {children}
    </InputContext.Provider>
  );
}

export default InputContext;
