import React from "react";

import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>your favorite </h2>

        <div className="movies-grid">
          {favorites.map((fav) => (
            <MovieCard movie={fav} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite movie yet</h2>
      <p>start adding movies to your favorite</p>
    </div>
  );
}

export default Favorite;
