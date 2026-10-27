import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const movies = [
    {
      id: 1,
      title: "avator",
      release_date: "12/22/2020",
    },
    {
      id: 2,
      title: "mission impossible",
      release_date: "03/25/2023",
    },
    {
      id: 3,
      title: "panda",
      release_date: "12/22/2026",
    },
    {
      id: 4,
      title: "death race",
      release_date: "01/12/2021",
    },
  ];

  const [searchQuery, setSearchQuerg] = useState("");
  const handleSearchInput = (e) => {
    setSearchQuerg(e.target.value);
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
