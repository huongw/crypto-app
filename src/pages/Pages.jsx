import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Details } from "./index";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

export default Pages;
