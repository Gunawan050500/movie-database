import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
// import Button from "../Ui/Button/Button";
// import data from "../../utils/constants/data";
// import { useState } from "react";
// import { nanoid } from "nanoid";
import StyledMovies from "./StyledMovies";

function Movies(props) {
  const { setTitle } = props;
  const movies = useSelector((store) => store.movies.movies);

  // function tambahFilm() {
  //   const movie = {
  //     id: nanoid(8),
  //     title: "One Piece",
  //     year: "1999",
  //     type: "Anime",
  //     poster: "https://picsum.photos/300/400",
  //   };

  //   setMovies([...movies, movie]);
  // }

  return (
    <StyledMovies>
      <section>
        <h2>{setTitle}</h2>
        <div className="movie__container">
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* <Button onClick={tambahFilm}>Add Movie</Button> */}
      </section>
    </StyledMovies>
  );
}

export default Movies;
