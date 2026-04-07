import type { MovieResponse } from "../types/movie";
import BASE_URL, { options } from "./tmdb";


export async function fetchTrending(page = 1 ): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/trending/movie/day?page=${page}`, options);
    return res.json();
}

export async function fetchPopular(): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/movie/popular`, options);
    return res.json();
}

export async function searchMovies(query: string, page = 1): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/search/movie?query=${query}&page=${page}`, options);
    return res.json();
}

export async function fetchMoviesById(id: number) {
    const res = await fetch(`${BASE_URL}/movie/${id}`, options)
    return res.json();
}

export async function fetchNowPlaying(): Promise<MovieResponse> {
  const res = await fetch(`${BASE_URL}/movie/now_playing`, options);
  return res.json();

}