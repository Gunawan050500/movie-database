import StyledMovie from "./StyledMovie";
import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster ||
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          }
          alt=""
        />
        <h3>{movie.title}</h3>
        <p>{movie.year || movie.release_date}</p>
      </Link>
    </StyledMovie>
  );
}

export default Movie;
