import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated() {
  const [movies, setMovies] = useState([]);

  async function fetchTopRatedMovie() {
    const response = await axios(ENDPOINTS.TOP_RATED);

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
