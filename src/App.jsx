import React from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
      {/* <Home /> */}
    </div>
  );
}

export default App;
