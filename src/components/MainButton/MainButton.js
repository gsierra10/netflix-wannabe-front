import { useNavigate } from "react-router-dom";
import AllMovies from "../AllMovies/AllMovies";
import SearchMovies from "../SearchMovies/SearchMovies";



const MainButton = () => {
    const navigate = useNavigate()
    const moviesButton = () => {navigate("/movies")}
   
    return(
        <div>
         <AllMovies/>
            <input onClick={moviesButton} type="submit" value="Todas las películas" className="MainButton"/>
        </div>
    )
}

export default MainButton