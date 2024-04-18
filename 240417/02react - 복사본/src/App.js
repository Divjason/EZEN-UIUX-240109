import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductAll from "./components/ProductAll";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login />}
          setAuthenticate={setAuthenticate}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
          authenticate={authenticate}
        />
      </Routes>
    </div>
  );
}

export default App;
