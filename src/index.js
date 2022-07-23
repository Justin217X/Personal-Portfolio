import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./components/StartPage";
import Particle from "./components/Particles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Portfolio" element={<App />} />
      </Routes>
    </BrowserRouter>
    <Particle />
  </React.StrictMode>
);
