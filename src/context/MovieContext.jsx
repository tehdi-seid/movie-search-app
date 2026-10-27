import React, { createContext, useContext, useEffect, useState } from "react";

const movieContext = createContext(null);

export const useMovieContext = () => useContext(movieContext);

export const MoveContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFaves = localStorage.getItem("favorites");
      return storedFaves ? JSON.parse(storedFaves) : [];
    } catch (error) {
      console.error("Failed to load favorites:", error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id);
  };
  const value = {
    favorites,
    addToFavorites,
    removeFavorite,
    isFavorite,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};
