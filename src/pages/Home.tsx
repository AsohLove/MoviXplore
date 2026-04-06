import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchTrending, searchMovies } from "../api/movies"
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import PopularMovies from "../components/PopularMovies";
import NewMovies from "../components/NewMovies";

export default function Home(){
    const [query, setQuery] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    const { data, isLoading, isError } = useQuery({
        queryKey: ["movies", searchQuery],
        queryFn:() => searchQuery.trim() ? searchMovies(searchQuery) : fetchTrending(),
    });

    return (
        <div className="bg-black/90">
            <SearchBar 
            query={query} 
            setQuery={setQuery}
            onSearch={setSearchQuery}
            />
            <MovieGrid
            movies={data?.results ?? []}
            isLoading={isLoading}
            isError={isError}
            />
            {/* <TrendingMovies /> */}
            <PopularMovies />
            <NewMovies />
        </div>
    )
}