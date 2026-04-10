import { useQuery } from "@tanstack/react-query"
import { fetchTvShows } from "../api/movies"
import { IMG_URL } from "../api/tmdb";

export default function TvShows() {
    const {data, isLoading, isError } = useQuery({
        queryKey: ["tv-shows"],
        queryFn: () => fetchTvShows(),
    });

    if (isLoading) return <p>Loading TV Shows...</p>;

    if (isError) return (
        <p> Error loading TV shows</p>
    )


  return (
    <div>
        <h1 className="px-10 py-6 text-3xl font-extrabold ">TV Shows</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data?.results.map((tv) => (
                <div key={tv.id}>
                    <img src={tv.poster_path ? IMG_URL + tv.poster_path : "/placeholder.png"} alt={tv.name} className="w-full h-64 object-cover"/>
                    <p className="text-sm mt-2">{tv.name}</p>
                    <p className="text-sm mt-2">{tv.first_air_date}</p>
                    <p>⭐ {tv.vote_average}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
