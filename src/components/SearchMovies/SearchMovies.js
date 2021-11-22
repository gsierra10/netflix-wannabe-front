import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'

const SearchMovies = () => {
	const[movies, setMovies] = useState([]);
	// const[loading, setLoading] = useState(true);
	// const[error, setError] = useState(false);

	const getMovies = async() => {
		try {
			let res = await fetch('http://localhost:0420/movies')
			res = await res.json()
			return setMovies(movies)
			
			// setLoading(false)
		} catch (error) {
			console.log("errorsito")
			// setError(true)
			// setLoading(false)
		}
		console.log(movies)
	}
	useEffect(() =>{
		getMovies()
	},[])
	return (

		<>
		<form className="add-form" onSubmit={(e)=> getMovies(e)}>
            <div className="form-control">
                <label>Nombre de la pelicula</label>
                <input type="text" name="movie" placeholder="Busca por titulo" required/>
				<button>Botón</button>
            </div>
        </form>
		
		
			{/* {error && <span>No podemos recuperar las peliculas</span>} */}
			{/* {loading && <h1>Buscando</h1>} */}
			{[movies].map((dataMovie)=>{
				return(<MovieCard title={dataMovie.title} director={dataMovie.director} genre = {dataMovie.genre} duration = {dataMovie.duration} actors = {dataMovie.actors}/>)
			})}
		</>
	)
}

export default SearchMovies

