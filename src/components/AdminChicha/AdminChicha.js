import APIConsumer from "../../services/apiConsumer"
import { useState } from "react"
import RentCard from "../RentCard/RentCard"

const AdminChicha = () => {
    const [rents, setRents] =  useState([])


    return (
        <div>
            <RentCard />
        </div>
    )
}

export default AdminChicha
