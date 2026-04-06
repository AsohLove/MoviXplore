import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";


export default function App() {

  return (
    <div>
      <h1>Movie Explorer</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

