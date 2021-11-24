import React, {useState, useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'
import APIConsumer from '../../services/apiConsumer';

const AllMovies = () => { 
	const[movies, setMovies] = useState([])
	const[rents, setRents] = useState([])
	const handleChanges = async (e) => {
		try {
			let res = await fetch('http://localhost:5000/rent/rents')
			res = await res.json()
			setRents(res.data) 
		} catch (error) {
			
		}
	}
	useEffect(()=>{
		handleChanges()
	},[])
	return (		
		<>
			{rents.map((dataRents)=>{
				console.log(dataRents)
				return(<MovieCard title={dataRents.id} />)
				
			})}

		</>
	)
}

export default AllMovies

