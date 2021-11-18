import { useState } from 'react'


const LoginUser = ({ onAdd }) => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    

    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value

        try{
            let result = await fetch('http://localhost:5000/user/login',{
                method: "POST",
                body:{ mail: email, password: password}
            })

            result = result.json()

            // Guardamos el token para que todos los componentes que lo necesiten puedan recuperarlo
            localStorage.setItem('token', result)
        
        } catch(e){
            console.log(e)
        }

        if(!email || !password ){
            alert('Email o Contraseña incorrenta')
            return
        }
    
        /*onAdd({ name, email, password })*/

        // setName('')
        // setEmail('')
        // setPassword('')
    }

    return (
        <form className='add-form' onSubmit={(e)=>onSubmit(e)}>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Email' 
                    required
                    />
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input 
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    required
                    />
            </div>    
            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )
}

export default LoginUser
