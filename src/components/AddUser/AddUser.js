import { useState } from 'react'

const AddUser = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email || !name || !password || !setReminder){
            alert('Por favor añada texto')
            return
        }
    
        onAdd({ name, email, password, reminder })

        setName('')
        setEmail('')
        setPassword('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nombre</label>
                <input 
                    type='text' 
                    placeholder='Añada su nombre completo' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='text' 
                    placeholder='Añada un Email valido' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Contraseña</label>
                <input 
                    type='text' 
                    placeholder='Añade su contraseña, minimo 8 caracteres' value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
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
