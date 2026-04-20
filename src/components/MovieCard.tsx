import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../api/tmdb";
import type { Movie } from "../types/movie";
import { Heart } from "lucide-react";
import useFavotite from "../hooks/useFavorite";

export default function MovieCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavotite();
  const liked = isFavorite(movie.id);

  return (
    <div className="relative rounded-lg overflow-hidden shadow cursor-pointer group">
      <img
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={
          movie.poster_path ? IMG_URL + movie.poster_path : "/placeholder.png"
        }
        alt={movie.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <button
        onClick={() => toggleFavorite(movie)}
        className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full hover:bg-black/80 transition"
      >
        <Heart
          className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : "text-white"}`}
        />
      </button>

      <div onClick={() => navigate(`/movie/${movie.id}`)} className="p-2">
        <p className="font-semibold truncate">{movie.title}</p>
        <div className="flex justify-between ">
          <p className="text-lg text-gray-500">
            {movie.release_date?.slice(0, 4)}
          </p>
          <p>⭐ {movie.vote_average.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
