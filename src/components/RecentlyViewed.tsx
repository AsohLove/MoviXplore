import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { IMG_URL } from "../api/tmdb";

export default function RecentlyViewed() {
  const { recentlyViewed, clearAll } = useRecentlyViewed();

  const navigate = useNavigate();

  if (!recentlyViewed) return null;
  return (
    <div className="px-10 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-extrabold dark:text-white">
          Recently Viewed
        </h2>
        <button
          onClick={clearAll}
          className="flex items-center font-semibold gap-1 text-sm hover:text-red-500 cursor-pointer transition"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {recentlyViewed.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="shrink-0 w-32 cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={
                  movie.poster_path
                    ? IMG_URL + movie.poster_path
                    : "/placeholder.png"
                }
                alt={movie.title}
                className="w-32 h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </div>
            <p className="text-xs text-gray-400 truncate mt-2">{movie.title}</p>
            <p className="text-xs text-gray-500">
              {movie.release_date?.slice(0, 4)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
