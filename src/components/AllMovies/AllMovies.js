import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'
import APIConsumer from '../../services/apiConsumer';

const AllMovies = () => { 
	const[movies,setMovies] = useState([])
	const handleChanges = async (e) => {
		try {
			let res = await fetch('http://localhost:3040/rent/')
			res = await res.json()
			setMovies(res.data) 
		} catch (error) {
			
		}
	}
	useEffect(()=>{
		handleChanges()
	},[])
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

