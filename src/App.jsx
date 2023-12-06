import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Entertainment from "./pages/Entertainment";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business />} />
      </Route>
    </Routes>
  );
};

export default App;
