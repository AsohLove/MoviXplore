import { useQuery } from "@tanstack/react-query";
import type { MovieResponse } from "../types/movie";
import { fetchTrending } from "../api/movies";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const { data } = useQuery<MovieResponse>({
    queryKey: ["trending"],
    queryFn:() => fetchTrending(),
  });

  const movies = useMemo(() => data?.results ?? [], [data]);

  const [currentMovie, setCurrentMovie] = useState(0)

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % movies.length);
    }, 7000)

    return () => clearInterval(interval)
  }, [movies])

  const movie = movies[currentMovie];

  if (!movie) return null;

  console.log(import.meta.env); // Vite

  const image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="relative h-[70vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
     
      <div className="absolute inset-0 bg-black/60" />

     
      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-xl text-white">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-500">
            Trending Movie
          </p>

          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
            {movie.title}
          </h1>

          <p className="mb-6 line-clamp-3 text-sm text-gray-300 md:text-base">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            <button className="rounded bg-white px-6 py-2 font-semibold text-black hover:bg-gray-200">
              Play
            </button>

            <button className="rounded bg-gray-700 px-6 py-2 font-semibold text-white hover:bg-gray-600">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}