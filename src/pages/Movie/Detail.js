import { useParams } from "react-router-dom";
import DetailMovie from "../../component/DetailMovie/DetailMovie";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovies } from "../../feature/moviesSlice";
import { useDispatch } from "react-redux";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  async function fetchRecom() {
    const response = await axios(ENDPOINTS.RECOM_MOVIE(params.movieid));

    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => {
    fetchRecom();
  }, [params.movieid]);

  return (
    <div>
      <DetailMovie />
      <Movies setTitle="Recomended" />
    </div>
  );
}

export default Detail;
