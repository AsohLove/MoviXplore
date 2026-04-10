const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

if (!TOKEN) {
  console.error("TMDB token is missing. Check your .env file.");
}

export const options = {
  headers: {
    Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    "Content-Type": "application/json",
  },
};
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export default BASE_URL;