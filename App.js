import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>Film Finder 🍿</h1>
      <h2>What movie do you want to watch?</h2>
      <SearchBar setMovies={setMovies} movies={movies} />
      {movies.length ? (
        <div>
          <h3>Here are your movie results</h3>
          {movies.map((movie) => {
            return (
              <div>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </div>
            );
          })}
        </div>
      ) : null}
      <label for="cars">Choose a movie genre:</label>
      <br></br>
      <br></br>
      <select name="genre" id="genre">
        <option value="comedy">comedy</option>
        <option value="action">action</option>
        <option value="horror">horror</option>
        <option value="romance">romance</option>
        <option value="drama">drama</option>
      </select>
    </div>
  );
}
