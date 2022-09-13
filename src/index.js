import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./routes/CounterPage";
import FormPage from "./routes/FormPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="counter" element={<CounterPage />} />
      <Route path="form" element={<FormPage />} />
    </Routes>
  </BrowserRouter>
);
