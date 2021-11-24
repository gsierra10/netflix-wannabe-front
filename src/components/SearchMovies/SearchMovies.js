import React, {useState,useEffect} from 'react';
import MovieCard from '../MovieCard/MovieCard'
import jwtDecode from 'jwt-decode';

const SearchMovies = () => {
		const [movies, setMovies] = useState([]);
		const [rents, setRents] = useState([])
		// const[loading, setLoading] = useState(true);
		// const[error, setError] = useState(false);

		const getMovies = async (e) => {
			// e.preventDefault()
			
			try {
				if(e){e.preventDefault()}				
				console.log(e.target.title.value)
				let res = await fetch(`http://localhost:3001/movies/?title=${e.target.title.value}`)
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

		const buyMovies = async (e) => {
			const user = JSON.parse(localStorage.getItem('token'))
			let jtw = jwtDecode(user);
			try{
			e.preventDefault()
			let results = await fetch("http://localhost:5000/rent/", {
				method: "POST",
				body: {
					"idUser": jtw.data,
					"idMovie":"619d0b28a9bf429622c2905f"
				}
				
			})
			results = await results.json()
			localStorage.setItem("token", results.token);
			
			console.log(results.newRent)
			setRents(results.newRent)
		}catch(error){
			console.log("error")
		}
	
		}
		useEffect(() => {
			getMovies()
		}, [])
		

		return (
				<>
					<form className = "add-form" onSubmit= {(e) => getMovies(e)}>
						<div className = "form-control" >
							<label > Nombre de la pelicula </label> 
							<input type = "text"name = "title"placeholder = "Busca por título..."required / >
							<button onClick = {(e) => buyMovies(e)}>Cómprame</button> 
							<button>Enseña</button>
						</div > 
					</form> 
					{movies.map((dataMovie) => {
						return ( < MovieCard title = {
									dataMovie.title
								}
								director = {
									dataMovie.director
								}
								genre = {
									dataMovie.genre
								}
							/>)
						})} 
				</>
		)
}
	export default SearchMovies;