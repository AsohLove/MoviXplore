import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchTrending } from "../api/movies"
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";

export default function Home(){
    const [query, setQuery] = useState("")

    const { data, isLoading, isError } = useQuery({
        queryKey: ["trending"],
        queryFn: fetchTrending,
    });

    return (
        <div>
            <Navbar />
            <SearchBar query={query} setQuery={setQuery}/>
            <MovieGrid
            movies={data?.results ?? []}
            isLoading={isLoading}
            isError={isError}
            />
        </div>
    )
}