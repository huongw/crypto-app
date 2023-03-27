import { Route, Routes } from "react-router-dom";
import { HomePage, CoinsPage, DetailsPage } from "./index";
import { AnimatePresence } from "framer-motion";
import { ErrorProvider } from "../context/ErrorContext";
import { LoadingProvider } from "../context/LoadingContext";

const Pages = () => {
  return (
    <AnimatePresence mode="wait">
      <LoadingProvider>
        <ErrorProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins" element={<CoinsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </ErrorProvider>
      </LoadingProvider>
    </AnimatePresence>
  );
};

export default Pages;
