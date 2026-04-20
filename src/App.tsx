import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import DashboardLayout from "./layout/DashboardLayout";
import PopularPage from "./pages/PopularPage";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="favorite" element={<Favorites />} />
        <Route path="popular" element={<PopularPage /> }/>
        <Route path="movies" element={<Movies /> }/>
        <Route path="tvshows" element={<TvShows />} />
      </Route>
    </Routes>
  );
}
