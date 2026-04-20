import type { Movie } from "../types/movie";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

type Props = {
    movies: Movie[];
    isLoading: boolean;
    isError: boolean;
};

export default function MovieGrid({ movies, isLoading, isError }: Props){
    if (isLoading) return <Loader />;

    if (isError) {
        return <p className="text-center text-red-500 mt-6">
            Something went wrong, Please trt again
        </p>
    }

    if(!movies.length) {
        return (
            <p className="text-center text-gray-500 mt-6">
                No Movies Found
            </p>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            
            ))}

        </div>
    );
}