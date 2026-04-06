import { useNavigate } from "react-router"
import type { Movie } from "../types/movie";
import { IMG_URL } from "../api/tmdb";

export default function MovieCard({ movie }: {movie: Movie }){
    const navigate = useNavigate();
    return (
        <div 
        onClick={() => navigate(`/movie/${movie.id}`)}
        className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
        >
            <img 
            src={movie.poster_path ? IMG_URL + movie.poster_path : "/placeholder.png"}
            alt={movie.title}
            className="w-full h-64 object-cover"
            />
            <div>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>⭐ {movie.vote_average.toFixed(2)}</p>
            </div>

        </div>
    )
}