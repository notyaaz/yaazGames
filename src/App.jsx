import React, { useEffect, useState } from "react";
import Tenzies from "./components/Tenzies/Tenzies.jsx";
import Minessweeper from "./components/Minessweeper/Minessweeper.jsx";
import Navbar from "./components/Navs/Navbar.jsx";
import Home from "./components/Navs/Home.jsx";
import Offline from "./components/Navs/Offline.jsx";
import Online from "./components/Navs/Online.jsx";

import { Routes, Route } from "react-router-dom";
import GamePicker from "./components/GamePicker.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="/online" element={<Online />} />
        <Route path="/offline/:gameName" element={<GamePicker />} />
      </Route>
    </Routes>
  );
}
