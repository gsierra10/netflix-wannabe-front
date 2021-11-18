// import PropTypes from 'prop-types'

const RegisterHeader = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

RegisterHeader.defaultProps = {
    title: 'Registro de Usuario Netflix-Wannabe'
}

export default RegisterHeader