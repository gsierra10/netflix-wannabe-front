import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'

const SearchMovies = () => {
	const[movies, setMovies] = useState([]);
	// const[loading, setLoading] = useState(true);
	// const[error, setError] = useState(false);

	const getMovies = async() => {
		try {
			let res = await fetch('http://localhost:3043/rents/')
			res = await res.json()
			setMovies(res.data) 
			
			/* 
				ESTO NO ES UN ARRAY!!!! por eso no te deja hacer un map, 
				donde está el console log? 
				cuando lo ponemos, nos sale un array vacío :( 
				¿por que el backend os da un array vacio? 
				No debería, en postman nos da el json completo y en la respuesta del navegador sale la info de la película*/
			
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
			{movies.map((dataMovie)=>{
				console.log(dataMovie)
				return(<MovieCard title={dataMovie.title} />)
			})}
		</>
	)
}

export default SearchMovies

