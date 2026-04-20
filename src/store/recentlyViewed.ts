import type { Movie } from "../types/movie";

const KEY = "movixplore_recently_viewed";
const MAX = 10;

export function getRecentlyViewed(): Movie[] {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : [];
}

export function addRecentlyViewed(movie: Movie): void {
    const current = getRecentlyViewed();

    const filtered = current.filter((m) => m.id !== movie.id);

    const updated = [movie, ...filtered].slice(0, MAX);
    localStorage.setItem(KEY, JSON.stringify(updated));
}

export function clearRecentlyViewed(): void {
    localStorage.removeItem(KEY);
}