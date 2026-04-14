import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "../api/movies";
import Loader from "./Loader";
import MovieCard from "./MovieCard";
import type { MovieResponse } from "../types/movie";

export default function TrendingMovies() {

    const { data, isLoading, isError } = useQuery<MovieResponse>({
        queryKey: ["trending"],
        queryFn: () => fetchTrending(),
    });

    if (isLoading) return <Loader />

    if (isError) return (
        <p>
            Error fetching trending movies, please try again.
        </p>
    )
    if (!data?.results) return null;

  return (
    <div>
        <h1 className="text-xl font-extrabold mb-4 uppercase text-blue-400">Trending Now</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white gap-4">
            {data?.results.map((movie)=> (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
        
    </div>
  )
}
