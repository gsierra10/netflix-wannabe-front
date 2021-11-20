import { useNavigate } from 'react-router-dom'

const HomeButtons = () => {
    const navigate = useNavigate()
    const navigateButton = () =>{
        navigate('/')
    }
    const navigateLogin = () =>{
        navigate('/login')
    }
    const navigateRegister = () =>{
        navigate('/register')
    }


    return (
        <div>
            
                <input onClick={navigateButton} type='submit' value='Ver que peliculas tenemos' className='btn btn-block' />
                <input onClick={navigateLogin} type='submit' value='Ir a mi perfil' className='btn btn-block' />
                <input onClick={navigateRegister} type='submit' value='Registrarse' className='btn btn-block' />
            
        </div>
    )
}

export default HomeButtons
