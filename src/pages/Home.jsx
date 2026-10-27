import React, { useEffect, useMemo, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovie, searchMovie } from "../services/api.js";
// import { ServerRouter } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuerg] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPolularMoveis() {
      try {
        setMovies(await getPopularMovie());
      } catch {
        setError("failed to load movies....");
      } finally {
        setLoading(false);
      }
    }
    loadPolularMoveis();
  }, []);

  const handleSearchInput = (e) => {
    setSearchQuerg(e.target.value);
  };
  const handlSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    setLoading(true);
    const searchResult = await searchMovie(searchQuery);
    setMovies(searchResult);
    if (loading) return;
    try {
    } catch {
      setError("failed to load...");
    } finally {
      setLoading(false);
    }
    setSearchQuerg("");
  };

  return (
    <div className="home">
      <form onSubmit={handlSubmit} className="search-form">
        <input
          className="search-input"
          value={searchQuery}
          type="text"
          onChange={(e) => handleSearchInput(e)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading.....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
