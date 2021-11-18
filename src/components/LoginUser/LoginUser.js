import { useState } from 'react'


const LoginUser = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email || !name || !password ){
            alert('Email o Contraseña incorrenta')
            return
        }
    
        onAdd({ name, email, password })

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='text' 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input 
                    type='password' 
                    placeholder='Contraseña' value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
            </div>    
            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )
}

export default LoginUser
