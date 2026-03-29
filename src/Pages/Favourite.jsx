import { getFav } from "../components/fav";
import MovieCard from  "../components/MovieCard";


function Favourite() {
  const favs = getFav();
  console.log(favs);
  
  return (
    <div>
      <h1>Favourite</h1>
    </div>
  )
}

export default Favourite
