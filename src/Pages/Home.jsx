import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/apiService";
import { Link } from "react-router-dom";

function Home(){

    let [movies, setMovies] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        getTrendingMovies()
        .then((data)=>{
            console.log(data);
            setMovies(data.slice(0, 4));
            
        })
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false));
    }, [])
    
    if (loading){
        return <h2 className="p-4">Loading Movies...</h2>
    }

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home;