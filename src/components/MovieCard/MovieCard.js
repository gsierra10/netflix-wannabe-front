const MovieCard = (props) => {
    return(
        <div>
            <ul>
                <li>{props.title}</li>
                {/* <li>{props.director}</li>
                <li>{props.genre}</li> */}
            </ul>
        </div>
        
    )
}

export default MovieCard