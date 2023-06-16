import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  async function fetchNowPlayingMovie() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

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
