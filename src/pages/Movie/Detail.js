import { useParams } from "react-router-dom";
import DetailMovie from "../../component/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../component/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  async function fetchRecom() {
    const response = await axios(ENDPOINTS.RECOM_MOVIE(params.movieid));

    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchRecom();
  }, [params.movieid]);

  return (
    <div>
      <DetailMovie />
      <Movies movies={movies} setTitle="Recomended" />
    </div>
  );
}

export default Detail;
