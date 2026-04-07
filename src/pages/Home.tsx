// pages/Home.tsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PopularMovies from "../components/PopularMovies";
import NewMovies from "../components/NewMovies";
import InfiniteMovieGrid from "../components/InfiniteMovieGrid";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen text-white">
      <div className="px-10 pt-10">
        <SearchBar
          query={searchQuery}
          setQuery={setSearchQuery}
          onSearch={setSearchQuery}
        />
      </div>

      {!searchQuery.trim() && (
        <>
          <PopularMovies />
          <NewMovies />
        </>
      )}

      <div className="px-10 py-6">
        <InfiniteMovieGrid query={searchQuery} />
      </div>
    </div>
  );
}