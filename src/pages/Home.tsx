// pages/Home.tsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PopularMovies from "../components/PopularMovies";
import NewMovies from "../components/NewMovies";
import InfiniteMovieGrid from "../components/InfiniteMovieGrid";
import RecentlyViewed from "../components/RecentlyViewed";
import TvShows from "./TvShows";
import TrendingMovies from "../components/TrendingMovies";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 ">
        <SearchBar
          query={searchQuery}
          setQuery={setSearchQuery}
          onSearch={setSearchQuery}
        />
      </div>

      {!searchQuery.trim() && <RecentlyViewed />}

      {!searchQuery.trim() && (
        <>
          <TrendingMovies />
          <PopularMovies />
          <NewMovies />
          <TvShows />
        </>
      )}

      

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6">
        <InfiniteMovieGrid query={searchQuery} />
      </div>

      
    </div>
  );
}