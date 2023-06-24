import { useEffect } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovies } from "../../feature/moviesSlice";
import { useDispatch } from "react-redux";

function TopRated() {
  const dispatch = useDispatch();

  async function fetchTopRatedMovie() {
    const response = await axios(ENDPOINTS.TOP_RATED);

    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    fetchTopRatedMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero />
      <Movies setTitle="Top Rated" />
    </>
  );
}

export default TopRated;
