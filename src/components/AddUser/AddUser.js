import APIConsumer from '../../../services/apiConsumer.js'

const AddUser = () => {

    const setHandleChanges = async (e) => {
        e.preventDefault()
        await APIConsumer.registerUser(JSON.stringify({name: e.target.name.value, email: e.target.email.value, password: e.target.password.value}))
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
