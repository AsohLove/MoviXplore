import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { IMG_URL } from "../api/tmdb";
import useFavotite from "../hooks/useFavotite";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavotite();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-10 py-10">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-black mb-2">My List</h1>
        <div className="w-16 h-1 bg-red-600 mb-4" />
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-10">
          {favorites.length} Title{favorites.length !== 1 ? "s" : ""} Saved
        </p>
      </motion.div>

      
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favorites.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
             
              <div className="relative overflow-hidden rounded-sm">
                <img
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  src={
                    movie.poster_path
                      ? IMG_URL + movie.poster_path
                      : "/placeholder.png"
                  }
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                
                <button
                  onClick={() => toggleFavorite(movie)}
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <span className="text-white text-sm font-semibold border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                    Remove
                  </span>
                </button>
              </div>

              
              <div
                className="mt-2"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <p className="text-sm font-semibold truncate">{movie.title}</p>
                <div className="flex items-center gap-2 text-xs mt-0.5">
                  <span className="text-green-400 font-bold">
                    {Math.round(movie.vote_average * 10)}% Match
                  </span>
                  <span className="text-gray-400">
                    {movie.release_date?.slice(0, 4)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
       
        <div className="flex flex-col items-center justify-center mt-32 gap-4 text-gray-500">
          <p className="text-xl">No titles saved yet.</p>
          <p className="text-sm">
            Click the + icon on any movie to add it here.
          </p>
        </div>
      )}

     
      {favorites.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center justify-center mt-24 mb-10 gap-4 text-center"
        >
          <h2 className="text-2xl font-bold text-white">Want to see more?</h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Explore the latest trending titles and add them to your list to
            watch whenever you want.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition rounded-sm"
          >
            Explore Trending
          </button>
        </motion.div>
      )}

      
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-8 right-8 w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}