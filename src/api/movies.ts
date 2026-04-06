import type { MovieResponse } from "../types/movie";
import BASE_URL, { options } from "./tmdb";


export async function fetchTrending(): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/trending/movie/day`, options);
    return res.json();
}

export async function fetchPopular(): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/movie/popular`, options);
    return res.json();
}

export async function searchMovies(query: string): Promise<MovieResponse> {
    const res = await fetch(`${BASE_URL}/search/movie?query=${query}`, options);
    return res.json();
}

export async function fetchMoviesById(id: number) {
    const res = await fetch(`${BASE_URL}/movie/${id}`, options)
    return res.json();
}