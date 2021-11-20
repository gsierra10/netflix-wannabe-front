import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'

const SearchMovies = () => {
	const[movies, setMovies] = useState([]);
	const[loading, setLoading] = useState(true);
	const[error, setError] = useState(false);

	const getMovies = async() => {
		try {
			let res = await fetch('')
			res = await res.json()
			setMovies(res.movies)
			setLoading(false)
		} catch (error) {
			setError(true)
			setLoading(false)
		}
	}
	useEffect(() =>{
		getMovies()
	},[])
	return (
		<>
			{error && <span>No podemos recuperar las peliculas</span>}
			{loading && <h1>Buscando</h1>}
			{movies.map((dataMovie)=>{
				return(<MovieCard title={dataMovie.title} director={dataMovie.director}genre = {dataMovie.genre} duration = {dataMovie.duration} actors = {dataMovie.actors}/>)
			})}
		</>
	)
}

export default SearchMovies

