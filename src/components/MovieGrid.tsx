import type { Movie } from "../types/movie";
import Loader from "./Loader";

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
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            
            ))}

        </div>
    );
}