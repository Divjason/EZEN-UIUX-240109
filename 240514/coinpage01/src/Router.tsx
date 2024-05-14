import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
