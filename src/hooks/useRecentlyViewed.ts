import { useState } from "react";
import { addRecentlyViewed, clearRecentlyViewed, getRecentlyViewed } from "../store/recentlyViewed";
import type { Movie } from "../types/movie";

export function useRecentlyViewed() {
    const [recentlyViewed, setRecentlyViewed] = useState<Movie[]>(getRecentlyViewed);

    function addMovie(movie: Movie) {
        addRecentlyViewed(movie);
        setRecentlyViewed(getRecentlyViewed())
    }

    function clearAll(){
        clearRecentlyViewed();
        setRecentlyViewed([])
    }

    return { recentlyViewed, addMovie, clearAll}
}