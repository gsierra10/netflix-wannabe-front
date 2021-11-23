import React, { useState, useEffect } from 'react'
//import APIConsumer from "../../services/apiConsumer"
import RentCard from "../RentCard/RentCard"

const AdminChicha = () => {
    const [rents, setRents] = useState([])
    const getRents = async(e) =>{
        try{
            e.preventDefault()
            let result = await fetch('http://localhost:5000/rent/all')
            result = result.json()
            setRents(result.data) 
        } catch(data){
            console.log(data)
        }
    }
    useEffect(() => {
        return () => {
            getRents()
        }
    }, [])
    return (
        <>
            
            {rents.map((dataRent)=>{
                return(<RentCard _id={dataRent._id} idUser={dataRent.idUser} idMovie={dataRent.idMovie}/>)
            })}
            <form>
                <div>
                    <button onClick={(e)=>getRents(e)}>soy admin te lo prometo</button>
                </div>
            </form>
            
        </>
    )
}

export default AdminChicha
