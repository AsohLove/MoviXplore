// pages/Favorites.tsx
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import useFavotite from "../hooks/useFavotite";

export default function Favorites() {
  const { favorites } = useFavotite();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6"
    >
      <h1 className="text-2xl font-bold mb-6">My List</h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 text-gray-400">
          <Heart className="w-16 h-16" />
          <p className="text-lg">No movies added yet.</p>
          <p className="text-sm">
            Click the heart icon on any movie to add it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
