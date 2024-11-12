require('../assets/css/Nav.css');

export default function Nav () {
    return(
        <nav className='nav'>
            <div className='logo'>
                <img src={require('../assets/img/hello-icon.png')} alt='Developer Illustration'></img>
            </div>
            <ul>
                <li><a href='/contacto'>Contacto</a></li>
                <li><a href='/perfil-profesional'>Perfil Profesional</a></li>
                <li><a href='/habilidades'>Habilidades</a></li>
                <li><a href='/proyectos'>Proyectos</a></li>
                <li><a href='/educacion'>Educación</a></li>
                <li><a href='/europass'>Europass</a></li>
            </ul>
        </nav>
    );
}