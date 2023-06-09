import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import AddMovieForm from "../component/AddMovieForm/AddMovieForm";
import data from "../utils/constants/data";
import { useState } from "react";

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies setTitle="Latest Movies" movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
