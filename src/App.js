import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/CreateMovie";
import NowPlaying from "./pages/Movie/NowPlaying";
import Popular from "./pages/Movie/Popular";
import TopRated from "./pages/Movie/TopRated";
import Counter from "./component/Counter/Counter";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<NowPlaying />}></Route>
          <Route path="/movie/now" element={<Popular />}></Route>
          <Route path="/movie/top" element={<TopRated />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
