import { useQuery } from "@tanstack/react-query";
import { fetchNowPlaying } from "../api/movies";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

export default function NewMovies() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["newMovies"],
        queryFn: fetchNowPlaying,
    });

    if (isLoading) return <Loader />

    if (isError) return (
        <p>
            Error fetching new movies, please try again.
        </p>
    )
  return (
    <div>
        <h1 className="text-xl text-blue-400 font-extrabold mb-4">NEW RELEASES</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
            {data?.results.map((movie)=> (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
        
    </div>
  )
}
