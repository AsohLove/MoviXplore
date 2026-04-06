import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./components/Favorites";
import DashboardLayout from "./layout/DashboardLayout";

export default function App() {
  return (
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="favorite" element={<Favorites />} />
        </Route>
        
      </Routes>

  );
}
