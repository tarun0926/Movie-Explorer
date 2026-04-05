import { getFav } from "../components/fav";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const favs = getFav();
  // console.log(favs);

  if (favs.length === 0) {
    return (
      <h2 className="text-center text-xl mt-10 font-semibold animate-pulse">
        No Favourite Movies ❤️
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8 text-blue-400 text-shadow-lg text-shadow-blue-600 animate-pulse">
        My Favourite Movies
      </h1>

      <div className="max-w-8xl mx-auto px-4 grid gap-6 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favs.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
