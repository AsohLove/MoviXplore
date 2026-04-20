import  { useState } from 'react'
import { addFavorite, getFavorites, isFavorite, removeFavorite } from '../store/favorite'
import type { Movie } from '../types/movie';

export default function useFavorite() {
    const [favorites, setFavorites] = useState<Movie[]>(getFavorites);

    function toggleFavorite(movie: Movie){
        if (isFavorite(movie.id)){
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }

        setFavorites(getFavorites());
    }

    return { favorites, toggleFavorite, isFavorite}
}

