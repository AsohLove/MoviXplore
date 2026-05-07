import PopularMovies from "../components/PopularMovies";
import NewMovies from "../components/NewMovies";
import InfiniteMovieGrid from "../components/InfiniteMovieGrid";
import RecentlyViewed from "../components/RecentlyViewed";
import TvShows from "./TvShows";
import TrendingMovies from "../components/TrendingMovies";
import HeroSection from "../components/HeroSection";
import { useOutletContext } from "react-router";

type ContextType = {
  searchQuery: string;
}

export default function Home() {
  const {searchQuery} = useOutletContext<ContextType>()


  return (
    <div className="min-h-screen">
    
      {!searchQuery.trim() && (
        <>
          <HeroSection />
          <RecentlyViewed />
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
