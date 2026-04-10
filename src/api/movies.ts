import type { Movie, MovieResponse, TvResponse } from "../types/movie";
import BASE_URL, { options } from "./tmdb";

export async function fetchTrending(page = 1): Promise<MovieResponse> {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?page=${page}`,
    options,
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}

export async function fetchPopular(): Promise<MovieResponse> {
  const res = await fetch(`${BASE_URL}/movie/popular`, options);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}

export async function searchMovies(
  query: string,
  page = 1,
): Promise<MovieResponse> {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}`,
    options,
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}

export async function fetchMoviesById(id: number): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${id}`, options);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}

export async function fetchNowPlaying(): Promise<MovieResponse> {
  const res = await fetch(`${BASE_URL}/movie/now_playing`, options);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}

export async function fetchTvShows(page = 1): Promise<TvResponse> {
  const res = await fetch(`${BASE_URL}/trending/tv/day?page${page}`, options);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
}