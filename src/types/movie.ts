export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  popularity: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  genres: { id: number; name: string }[];
  runtime: string;
  tagline: string;
  revenue: number;
  budget: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TvShowTypes {
  id: number;
  name: string;
  original_language: string;
  first_air_date: string;
  poster_path: string | null;
  vote_average: number;
}

export interface TvResponse {
  page: number;
  results: TvShowTypes[];
  total_pages: number;
  total_results: number;
}