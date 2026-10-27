import React from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/App.css";
import { MoveContextProvider } from "./context/MovieContext.jsx";

function App() {
  return (
    <MoveContextProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MoveContextProvider>
  );
}

export default App;
