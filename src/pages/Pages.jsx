import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Details } from "./index";

const Pages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setError={setError}
            error={error}
          />
        }
      />
      <Route
        path="/details/:id"
        element={
          <Details
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setError={setError}
            error={error}
          />
        }
      />
    </Routes>
  );
};

export default Pages;
