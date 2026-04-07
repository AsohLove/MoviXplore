// components/InfiniteMovieGrid.tsx
import { useEffect, useRef } from "react";
import { useInfiniteMovies } from "../hooks/useInfiniteMovies";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

type Props = {
  query: string;
};

export default function InfiniteMovieGrid({ query }: Props) {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteMovies(query);

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Loader />;

  if (isError) return (
    <p className="text-center text-red-500 mt-6">
      Something went wrong. Please try again.
    </p>
  );

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  if (!movies.length) return (
    <p className="text-center text-gray-500 mt-6">No movies found.</p>
  );

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div ref={sentinelRef} className="h-10 mt-6" />

      {isFetchingNextPage && (
        <p className="text-center text-gray-400 text-sm mt-4">
          Loading more...
        </p>
      )}

      {!hasNextPage && movies.length > 0 && (
        <p className="text-center text-gray-500 text-sm mt-6 mb-10">
          You have reached the end.
        </p>
      )}
    </div>
  );
}