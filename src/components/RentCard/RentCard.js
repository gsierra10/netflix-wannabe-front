const RentCard = (props) => {
    return(
        <div>
            <ul>
                <li>{props._id} - {props.idUser} - {props.idMovie}</li>
            </ul>
        </div>
        
    )
}

export default RentCard