
import type { Movie } from "../types/movie";

const KEY = "movixplore_favorites";

export function getFavorites(): Movie[] {
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addFavorite(movie: Movie): void {
  const favorites = getFavorites();
  const already = favorites.find((m) => m.id === movie.id);
  if (already) return;
  localStorage.setItem(KEY, JSON.stringify([...favorites, movie]));
}

export function removeFavorite(id: number): void {
  const favorites = getFavorites();
  localStorage.setItem(
    KEY,
    JSON.stringify(favorites.filter((m) => m.id !== id))
  );
}

export function isFavorite(id: number): boolean {
  return getFavorites().some((m) => m.id === id);
}