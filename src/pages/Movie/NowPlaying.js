import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";

function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const URL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;

  async function fetchNowPlayingMovie() {
    const response = await axios(URL);

    console.log("response", response);

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchNowPlayingMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero />
      <Movies setTitle="Now Playing" movies={movies} setMovies={setMovies} />
    </>
  );
}

export default NowPlaying;
