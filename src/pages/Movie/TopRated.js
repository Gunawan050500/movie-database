import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";

function TopRated() {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const URL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;

  async function fetchTopRatedMovie() {
    const response = await axios(URL);

    console.log("response", response);

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchTopRatedMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero />
      <Movies setTitle="Top Rated" movies={movies} setMovies={setMovies} />
    </>
  );
}

export default TopRated;
