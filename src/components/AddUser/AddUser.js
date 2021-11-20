import APIConsumer from '../../../services/apiConsumer.js'

const AddUser = () => {
    const navigate = useNavigate()

    const handleChange = async (e) => {
        e.preventDefault()

        try{
            let result = await fetch('http://localhost:5000/user/alta',{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ "name": e.target.name.value ,"email": e.target.email.value, "password": e.target.password.value })
            })

            result = await result.json()
            console.log(result)

            // // Guardamos el token para que todos los componentes que lo necesiten puedan recuperarlo
            // localStorage.setItem('token', result)
            navigate('/login')

        } catch(e){
            console.log(e)
        }
    }

return (
    <form className='add-form' onSubmit={(e)=>setHandleChanges(e)}>
        <div className='form-control'>
            <label>Nombre</label>
            <input type='text' name='name' placeholder='Añada su nombre completo.' required />
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Añada un email válido.' required />
        </div>
        <div className='form-control'>
            <label>Contraseña</label>
            <input type='password' name='password' placeholder='Añade su contraseña con un mínimo  de 8 carácteres.' required />
        </div>
        <div className='form-control form-control-check'>
            <label>¿Está de acuerdo con los terminos y condiciones?</label>
            <input type='checkbox' required />
        </div>
        <input type='submit' value='Registrarse' className='btn btn-block' />
    </form>
)
}

export default AddUser
