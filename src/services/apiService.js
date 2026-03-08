import Axios from "axios";

let API_KEY = import.meta.env.VITE_API_KEY;
let BASE_URL = import.meta.env.VITE_BASE_URL;

//Trending Movies
export const getTrendingMovies = async () => {
    try {
        const res = await Axios.get(
            `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
        );
        return res.data.results;
        
    } catch (error) {
        console.log(error, "Error in Fetching Movies");
        
    }
};

// Popular Movies

// Single Movie Details