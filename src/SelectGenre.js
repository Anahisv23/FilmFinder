import React, { useEffect, useState } from "react";

const SelectGenre = ({ setMoviesBasedOnGenre, moviesBasedOnGenre }) => {
  const [genreId, setGenreId] = useState(0);

  const handleChange = (e) => {
    setGenreId(parseInt(e.target.value));
  };

  useEffect(() => {
    const fetchMoviesWithGenre = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=a5934c7e65858ffcc1f6f15d2a0e2039&with_genres=${genreId}`
        );
        const data = await res.json();
        setMoviesBasedOnGenre(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesWithGenre();
  }, [genreId]);

  return (
    <div>
      <label for="genre">Choose a movie genre:</label>
      <br></br>
      <br></br>
      <select
        class="custom-select"
        name="genre"
        id="genre"
        onChange={handleChange}
      >
        <option value="null">---</option>
        <option value="35">Comedy</option>
        <option value="28">Action</option>
        <option value="27">Horror</option>
        <option value="10749">Romance</option>
        <option value="18">Drama</option>
        <option value="53">Thriller</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="80">Crime</option>
      </select>
    </div>
  );
};

export default SelectGenre;
