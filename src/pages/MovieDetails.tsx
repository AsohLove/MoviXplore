import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { fetchMoviesById } from "../api/movies";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { IMG_URL } from "../api/tmdb";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { useEffect } from "react";
import { Play } from "lucide-react";


export default function MovieDetails() {
  const { addMovie } = useRecentlyViewed()
  const { id } = useParams();

  const navigate = useNavigate();

  
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMoviesById(Number(id)),
  });

  useEffect(() => {
      if(movie) addMovie(movie)
  }, [movie]);


  if (isLoading) return <Loader />;

  if (isError)
    return (
      <p className="text-center text-red-500 mt-6">
        Something went wrong. Please try again.
      </p>
    );

    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-500 cursor-pointer"
      >
        ← Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8"
      >
        <img
          src={
            movie?.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
              : "/placeholder.png"
          }
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-4 left-6 text-white text-3xl font-bold"
        >
          {movie?.title}
        </motion.h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={
            movie?.poster_path ? IMG_URL + movie?.poster_path : "/placeholder.png"
          }
          alt={movie?.title}
          className="w-48 h-72 object-cover rounded-xl shadow-lg self-start"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap gap-2">
            {movie?.genres?.map((genre: { id: number; name: string }) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 {movie?.release_date?.slice(0, 4)}</span>
            <span>⭐ {movie?.vote_average?.toFixed(1)}/10</span>
            <span>🗳️ {movie?.vote_count?.toLocaleString()} votes</span>
            <span>🕐 {movie?.runtime} min</span>
            <a 
            href={`https://vidsrc-embed.ru/embed/movie?tmdb=${movie?.id}&sub_url=https%3A%2F%2Fvidsrc.me%2Fsample.srt&autoplay=1`}
            target="_self"
            >
            <Play size={24}/>
            </a>
            
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{movie?.overview}</p>
          </div>

          {movie.tagline && (
            <p className="text-gray-400 italic">"{movie?.tagline}"</p>
          )}

          <div className="flex gap-6 text-sm">
            {movie?.budget > 0 && (
              <div>
                <p className="text-gray-400">Budget</p>
                <p className="font-semibold">
                  ${movie?.budget?.toLocaleString()}
                </p>
              </div>
            )}
            {movie?.revenue > 0 && (
              <div>
                <p className="text-gray-400">Revenue</p>
                <p className="font-semibold">
                  ${movie?.revenue?.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
