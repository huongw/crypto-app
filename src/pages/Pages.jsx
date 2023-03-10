import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CoinsPage, DetailsPage } from "./index";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("usd");

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <CoinsPage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setError={setError}
              error={error}
              currency={currency}
              setCurrency={setCurrency}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <DetailsPage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setError={setError}
              error={error}
              currency={currency}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
