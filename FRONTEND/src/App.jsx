import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QrCode from "./pages/QrCode";
import SignUp from "./pages/PasswordManager/SignUp";
import Login from "./pages/PasswordManager/Login";
import PasswordManager from "./pages/PasswordManager/ManagePassword";
import ProtectWrapper from "./pages/userProtectWrapper";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QrCode" element={<QrCode />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/DailyTask" element={<PasswordManager />} /> */}
        <Route path="/PasswordManager" element={<PasswordManager />} />
        <Route path="*" element={<ProtectWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
