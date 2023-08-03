import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=a5934c7e65858ffcc1f6f15d2a0e2039`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      <div class="single-movie">
        <Link to="/">
          <span role="img">🍿</span>
        </Link>
        <h1 style={{ color: "#983c2d" }}>{movie.title}</h1>
        <p>{movie.tagline}</p>
        <h3>Release Date</h3>
        <p>{movie.release_date}</p>
        <h3>Overview</h3>
        <p>{movie.overview} </p>
        <h3>Duration of film</h3>
        <p>{movie.runtime} minutes</p>
        {movie.genres ? (
          <div>
            <h3>Genres</h3>
            {movie.genres.map((genre) => {
              return (
                <div>
                  <p>{genre.name}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Movie;
