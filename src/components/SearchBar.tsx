import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (query: string) => void;
};

export default function SearchBar({ query, setQuery, onSearch }: Props) {
  const [debouncedQuery] = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
  <div className="flex items-center gap-4 ml-auto">

    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-full max-w-lg">
      <Search className="text-gray-400 w-4 h-4" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Movies"
        className="bg-transparent outline-none w-full text-black text-sm"
      />
    </div>

  </div>
);
}
