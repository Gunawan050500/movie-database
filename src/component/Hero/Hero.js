import { useState, useEffect } from "react";
import Button from "../Ui/Button/Button";
import { Heading, Paragraph } from "../Ui/Typography/Typography";
import StyledHero from "./StyledHero";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // const random = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  async function fetchTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);

    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await fetchTrendingMovie();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
  }, []);
  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <Heading variant="primary" size="h2">
            {movie.title}
          </Heading>
          <Heading variant="danger">{genres}</Heading>
          <Paragraph variant="dark">{movie.overview}</Paragraph>
          {/* <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p> */}
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button
            as="a"
            href={trailer}
            target="blank"
            variant="primary"
            size="lg"
          >
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
