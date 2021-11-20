

const HomeHeader = ({ title }) => {
    return (
            <header className='header'>
                <h1>{title}</h1>
            </header>
    )
}

HomeHeader.defaultProps = {
    title: 'Bienvenido a Netflix-Wannabe, ¿Que cojones quieres hacer?'
}

export default HomeHeader