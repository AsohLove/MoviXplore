import { useQuery } from "@tanstack/react-query";
import { fetchPopular } from "../api/movies";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

export default function PopularMovies() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["popular"],
        queryFn: fetchPopular,
    });

    if (isLoading) return <Loader />

    if (isError) return (
        <p>
            Error fetching popular movies, please try again.
        </p>
    )
  return (
    <div>
        <h1 className="text-xl mt-4 font-extrabold mb-4">Popular on Cinema Noir</h1>
        <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data?.results.map((movie)=> (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
        
    </div>
  )
}
