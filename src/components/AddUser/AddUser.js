import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [reminder, setReminder] = useState(false)
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
        // if(!email || !name || !password ){
        //     alert('Por favor añada texto')
        //     return
        // }
    
        // onAdd({ name, email, password, reminder })

        // setName('')
        // setEmail('')
        // setPassword('')
        // setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={(e)=>handleChange(e)}>
            <div className='form-control'>
                <label>Nombre</label>
                <input 
                    type='text' 
                    placeholder='Añada su nombre completo' 
                    name='name'
                    required/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    placeholder='Añada un Email valido' 
                    required/>
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input 
                    type='password' 
                    placeholder='Añade su contraseña, minimo 8 caracteres' 
                    name='password'
                    required/>
            </div>    
            <div className='form-control form-control-check'>
                <label>¿Esta de acuerdo con nuestros terminos y condiciones?</label>
                <input 
                    type='checkbox'
                    // checked={reminder} 
                    // value={reminder} 
                    // onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
            </div>

            <input type='submit' value='Registrarse' className='btn btn-block' />
        </form>
    )
}

export default AddUser
