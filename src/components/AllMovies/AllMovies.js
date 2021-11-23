import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'
import APIConsumer from '../../services/apiConsumer';

const AllMovies = () => { 
	const[movies,setMovies] = useState()
	const handleChanges = async (e) => {
		e.preventDefault()
    	await APIConsumer.allMovies(JSON.stringify({movie: e.target.movie.value}))
	}
	useEffect(()=>{
		AllMovies()
	})
	return (		
		<>
			{movies.map((dataMovie)=>{
				console.log(dataMovie)
				return(<MovieCard title={dataMovie.title} />)
			})}
		</>
	)
}

export default AllMovies

