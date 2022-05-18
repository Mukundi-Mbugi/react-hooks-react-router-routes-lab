import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>

      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            {movie.title}{movie.time}
            <ul>
              <li>{movie.genres}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Movies;
