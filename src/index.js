import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./SignUp";
import Home from "./Home";
import LocalSignuPage from "./LocalSignuPage";
import SignUpLocal from "./SignUpLocal";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lsp" element={<LocalSignuPage />} />
        <Route path="/signuplocal" element={<SignUpLocal />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
