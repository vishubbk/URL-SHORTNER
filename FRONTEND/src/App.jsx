import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProtectWrapper from "./pages/userProtectWrapper";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ProtectWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
