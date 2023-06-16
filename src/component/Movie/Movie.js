import StyledMovie from "./StyledMovie";
import { Link } from "react-router-dom";
//' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RcPqetZMxRhAdfp6tD2lxDrIKTlewNHp4g&usqp=CAU'
function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster
              ? movie.poster
              : movie.poster_path
              ? movie.poster ||
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RcPqetZMxRhAdfp6tD2lxDrIKTlewNHp4g&usqp=CAU"
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
