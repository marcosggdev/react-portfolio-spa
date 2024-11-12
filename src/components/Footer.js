require('../assets/css/Footer.css');

export default function Footer() {
    return (
        <footer className='footer'>
            <main>
                <section className='links-of-interest'>
                    <h2>Enlaces de Interés</h2>
                    <p>Algunos sitios que me han resultado de gran ayuda</p>
                    <ul>
                        <li><a href='https://ibq.es/' target='_blank' rel='noreferrer'>IES Bernaldo de Quirós</a></li>
                        <li><a href='https://react.dev/' target='_blank' rel='noreferrer'>React Site</a></li>
                        <li><a href='https://vuejs.org/' target='_blank' rel='noreferrer'>Vue Site</a></li>
                        <li><a href='https://laravel.com/' target='_blank' rel='noreferrer'>Laravel Site</a></li>
                    </ul>
                </section>
                <section className='github'>
                    <h2>Mi Github</h2>
                    <p>Mi cuenta de Github, donde podrás ver el código de mi portfolio y de mi proyecto de fin de ciclo 'BloomJS'</p>
                    <header>
                        <img src={require('../assets/img/github-logo.png')} alt='Github Logo'></img>
                        <p>marcosggdev</p>
                    </header>
                </section>
                <section className='contact-form'>
                    <h2>Contáctame</h2>
                    <p>¿Interesado/a en enviarme una oferta de trabajo? ¡Actualmente estoy buscando mi primer trabajo como Junior y estoy dispuesto a escuchar tu oferta!</p>
                </section>
            </main>
            <div className='copy-container'>
                <p>Autor: Marcos García García. Todos los derechos reservados &copy;</p>
            </div>
        </footer>
    );
}