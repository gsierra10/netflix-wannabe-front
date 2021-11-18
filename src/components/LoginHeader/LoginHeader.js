// import PropTypes from 'prop-types'

const LoginHeader = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

LoginHeader.defaultProps = {
    title: 'Login de Usuario Netflix-Wannabe'
}

export default LoginHeader