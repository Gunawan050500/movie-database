import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovies } from "../../feature/moviesSlice";
import { useDispatch } from "react-redux";

function NowPlaying() {
  const dispatch = useDispatch();

  async function fetchNowPlayingMovie() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    fetchNowPlayingMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero />
      <Movies setTitle="Now Playing" />
    </>
  );
}

export default NowPlaying;
