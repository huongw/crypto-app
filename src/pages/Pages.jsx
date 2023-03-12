import { Route, Routes } from "react-router-dom";
import { HomePage, CoinsPage, DetailsPage, NewsPage } from "./index";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<CoinsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
