import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/start"
          element={
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
