import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectGenre from "./SelectGenre";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [moviesBasedOnGenre, setMoviesBasedOnGenre] = useState([]);

  return (
    <div className="App">
      <h1>🍿</h1>
      <h1>Film Finder</h1>
      <h2>What movie do you want to watch?</h2>
      <p>Search for a movie below</p>
      <SearchBar setMovies={setMovies} movies={movies} />
      {movies.length ? (
        <div>
          <h3>Here are your movie results</h3>
          {movies.map((movie) => {
            return (
              <div class="movie-results">
                <br></br>
                <Link class="enlace" to={`/movie/${movie.id}`}>
                  {movie.title}
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
      <h4 style={{ color: "#983C2D" }}>OR</h4>
      <SelectGenre
        moviesBasedOnGenre={moviesBasedOnGenre}
        setMoviesBasedOnGenre={setMoviesBasedOnGenre}
      />
      {moviesBasedOnGenre.length ? (
        <div>
          <h3>Results</h3>
          {moviesBasedOnGenre.map((mov) => {
            return (
              <div class="movie-results">
                <br></br>
                <Link class="enlace" to={`/movie/${mov.id}`}>
                  {mov.title}
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
