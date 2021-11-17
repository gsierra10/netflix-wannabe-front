import React, {useState, useEffect} from "react";
import MovieCard from "../MovieCard/MovieCard"

const MovieList =  () => {

    const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError]	 = useState(false)

    const getMovies = () => {
		
        try{
			let res = await fetch('url',)
			res = await res.json()
			setMovies(res.movies)
			setLoading(false)
		}catch(error){
			setError(true)
			setLoading(false)
		}

	useEffect( () => {
		getUsers()
	}, [])

	return (
		<>
			{error && <span><h1>No podemos recuperar las películas. Disculpe las molestias.</h1><img src="" alt="Gatitos que quiere Gustavo" /></span>}
			{loading && <h1>BUSCANDO</h1>}
			{movies.map((dataMovie) => {
				return( <MovieCard title = {dataMovie.title} director = {dataMovie.director} genre = {dataMovie.genre} duration = {dataMovie.duration} actors = {dataMovie.actors} /> )
			})}
		</>
	)
};

export default SearchMovies