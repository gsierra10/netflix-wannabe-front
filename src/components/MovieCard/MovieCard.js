import APIConsumer from "../../services/apiConsumer"

const MovieCard = () => {
    const setHandleChanges = async (e) => {
        await APIConsumer.findMovie(JSON.stringify({movie: e.targer.movie.value}))
    }
    return(
        <form className="add-form" onSubmit={(e)=> setHandleChanges(e)}>
            <div className="form-control">
                <label>Nombre de la pelicula</label>
                <input type="text" placeholcer="Busca por titulo" required/>
            </div>
        </form>
    )
}

export default MovieCard