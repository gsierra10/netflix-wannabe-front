import React, { useState, useEffect } from 'react'
//import APIConsumer from "../../services/apiConsumer"
import RentCard from "../RentCard/RentCard"

const AdminChicha = () => {
    const [rents, setRents] = useState([])
    const getRents = async() =>{
        try{
            
            let result = await fetch('http://localhost:5000/rent/all')
            result = await result.json()
            console.log(result.searchAll)
            setRents(result.searchAll) 
        } catch(data){
            console.log(data)
        }
    }
    
    // Esto se ejecuta cuando el componente se monta
    useEffect(() => {             
        getRents()
    }, [])

    return (
        <>
            
            {rents.map((dataRent)=>{
                return(<RentCard _id={dataRent._id} idUser={dataRent.idUser} idMovie={dataRent.idMovie}/>)
            })}
            
        </>
    )
}

export default AdminChicha
