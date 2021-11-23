import { Link } from 'react-router-dom'

const MovieCard = (props) => {

    return(
        <div>
            <ul>
               <li><Link to = {`/${props.title}`}> {props.title} - {props.director} - {props.genre} </Link></li>
            </ul>
        </div>
        
    )
}

export default MovieCard