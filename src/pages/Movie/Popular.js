import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  async function fetchPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR);

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
