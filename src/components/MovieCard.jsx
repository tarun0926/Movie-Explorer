import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { addToFav, removeFromFav, isFav } from "./fav";
function MovieCard({ movie }) {
  const [fav, setFav] = useState(isFav(movie.id));

  const toggleFav = () => {
    if (fav) {
      removeFromFav(movie.id);
      toast.info(`${movie.title} removed from Favourites`);
    } else {
      addToFav(movie);
      toast.success(`${movie.title} added to Favourites`);
    }
    setFav(!fav);
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden relative">
      <button className="absolute top-2 right-2 text-2xl" onClick={toggleFav}>
        {fav ? "❤️" : "🤍"}
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>

        <div className="flex justify-between items-center mt-2">
          <span className="bg-yellow-400 px-2 py-1 rounded text-sm font-bold">
            ⭐ {movie.vote_average}
          </span>
          <Link
            className="text-blue-600 font-medium"
            to={`/movie-details/${movie.id}`}
          >
            View Details ➡️
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
