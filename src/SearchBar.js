import React, { useState } from "react";

const SearchBar = ({ setMovies, movies }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovie = async () => {
    console.log("s", searchInput);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=a5934c7e65858ffcc1f6f15d2a0e2039`
      );
      const movieData = await res.json();
      console.log("data returned", movieData.results);
      return movieData.results;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log("input", e.target.value);
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    if (searchInput === "") setErrorMessage("Enter movie name");
    if (searchInput) setErrorMessage("");
    const movies = await fetchMovie();
    setMovies(movies);
  };

  return (
    <div class="search-bar-div">
      <input
        type="text"
        placeholder=" Enter movie title here"
        onChange={handleChange}
        value={searchInput}
        class="search-bar"
      />
      <button onClick={handleClick}>🔍</button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
};

export default SearchBar;
