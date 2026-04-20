import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/movies";

export function useInfiniteMovies(query: string) {
  const isSearching = query.trim().length > 0;

  return useInfiniteQuery({
    queryKey: ["search-movies", query],

    enabled: isSearching,

    queryFn: ({ pageParam = 1 }) =>
      searchMovies(query, pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
}