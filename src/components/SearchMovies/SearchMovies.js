import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'

const SearchMovies = () => {
	const[movies, setMovies] = useState([]);
	// const[loading, setLoading] = useState(true);
	// const[error, setError] = useState(false);

	const getMovies = async(e) => {
		// e.preventDefault()
		try {
			e.preventDefault()
			let res = await fetch(`http://localhost:0420/movies/?title=${e.target.title.value}`)			
			res = await res.json()
			setMovies(res.data)
			// setLoading(false)
		} catch (error) {
			console.log("errorsito")
			// setError(true)
			// setLoading(false)
		}
		console.log(movies)
	}
	useEffect(() =>{ getMovies() },[])

	return (

		<>
		<form className="add-form" onSubmit={(e)=> getMovies(e)}>
            <div className="form-control">
                <label>Nombre de la pelicula</label>
                <input type="text" name="movie" placeholder="Busca por título..." required/>
				<button>Botón</button>
            </div>
        </form>
			{/* {error && <span>No podemos recuperar las peliculas</span>} */}
			{/* {loading && <h1>Buscando</h1>} */}
			{movies.map((dataMovie)=>{return(<MovieCard title={dataMovie.title} director={dataMovie.director} genre={dataMovie.genre}/>)})}
		</>
	)
}

export default SearchMovies

