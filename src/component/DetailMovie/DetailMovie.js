/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Ui/Button/Button";
import StyledDetailMovie from "./StyledDetailMovie";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie?.videos?.results[0] &&
    `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  async function fetchDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL_MOVIE(params.movieid));

    setMovie(response.data);
  }

  useEffect(() => {
    fetchDetailMovie();
  }, [params.movieid]);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer} target="_blank">
          Watch Trailer
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
