import { useState, useEffect } from "react";
import Button from "../Ui/Button/Button";
import { Heading, Paragraph } from "../Ui/Typography/Typography";
import StyledHero from "./StyledHero";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      //Lakukan Fetching data disini
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setMovie(data);
    }

    fetchMovie();
  }, []);
  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div class="hero__left">
          <Heading variant="primary" size="h2">
            {movie.Title}
          </Heading>
          <Heading variant="danger">{movie.Genre}</Heading>
          <Paragraph variant="dark">{movie.Plot}</Paragraph>
          {/* <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p> */}
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button variant="primary" size="lg">
            Watch
          </Button>
        </div>
        <div class="hero__right">
          <img src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
