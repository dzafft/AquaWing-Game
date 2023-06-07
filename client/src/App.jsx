import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/start" element={<GamePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
