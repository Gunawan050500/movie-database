import { useEffect } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovies } from "../../feature/moviesSlice";
import { useDispatch } from "react-redux";

function PopularMovie() {
  const dispatch = useDispatch();

  async function fetchPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR);

    console.log("response", response);

    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    fetchPopularMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Hero />
      <Movies setTitle="Popular" />
    </div>
  );
}

export default PopularMovie;
