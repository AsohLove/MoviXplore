import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchTrending } from "../api/movies"
import SearchBar from "../components/SearchBar";

export default function Home(){
    const [query, setQuery] = useState("")

    const { data, isLoading, isError } = useQuery({
        queryKey: ["trending"],
        queryFn: fetchTrending,
    });

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery}/>
        </div>
    )
}