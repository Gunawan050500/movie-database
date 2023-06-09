import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";

function PopularMovie() {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

  async function fetchPopularMovie() {
    const response = await axios(URL);

    console.log("response", response);

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchPopularMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Hero />
      <Movies setTitle="Popular" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default PopularMovie;
