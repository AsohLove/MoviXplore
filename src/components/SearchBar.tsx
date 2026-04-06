import { useEffect } from "react";
import { useDebounce } from "use-debounce"
import { Search } from "lucide-react";

type Props = {
    query: string;
    setQuery: (query: string ) => void
}

export default function SearchBar({query, setQuery}: Props) {
    const [ debouncedQuery ] = useDebounce(query, 500)

    useEffect(() => {
        console.log("Search for: ", debouncedQuery);
    }, [debouncedQuery])

    return (
        <div>
            <Search className="text-gray-400 w-4 h-4"/>
            <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movies"
            className="bg-transparent outline-none w-full text-sm"
            />
        </div>
    )
}