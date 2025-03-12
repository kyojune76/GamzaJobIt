import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./App";
import Signup from "./SignUp";
import App from "./App";
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
        <Route path="/localsignupage" element={<LocalSignuPage />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
