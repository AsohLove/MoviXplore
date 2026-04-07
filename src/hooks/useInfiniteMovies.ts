// hooks/useInfiniteMovies.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTrending, searchMovies } from "../api/movies";

export function useInfiniteMovies(query: string) {
  return useInfiniteQuery({
    queryKey: ["movies", query],
    queryFn: ({ pageParam = 1 }) =>
      query.trim() ? searchMovies(query, pageParam) : fetchTrending(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined; 
    },
  });
}