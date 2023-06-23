import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";

function Main() {
  return (
    <main>
      <Hero />
      <Movies setTitle="Latest Movies" />
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
