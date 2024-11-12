import Tech from './Tech.js';
import Nav from '../components/Nav.js';

require('../assets/css/Header.css');

export default function Header() {

    return (
        <div className="header">
            <Nav />
            <div className='content'>
                <div className='header-left'>
                    <div className='content'>
                        <div className='stack'>
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                            <Tech 
                                href='https://react.dev/'
                                src={require('../assets/img/react-logo.png')}
                                alt='React Logo'
                            />
                        </div>
                        <p>Actualmente conozco y estudio las tecnologías web más utilizadas</p>
                        <ul>
                            <li>React y Vue</li>
                            <li>Laravel</li>
                            <li>NextJS, Gatsby y Svelte</li>
                            <li>NodeJS, Apache + PHP</li>
                            <li>HTML, Javascript, CSS</li>
                            <li>Spring Boot + Java</li>
                            <li>.NET + Python</li>
                        </ul>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='summary'>
                        <div>
                            <img src={require('../assets/img/education-icon.png')} alt=''></img>
                            <p>He obtenido el título de Técnico Superior en Desarrollo de Aplicaciones Web en el IES Bernaldo de Quirós, Mieres (Asturias, España)</p>
                        </div>
                        <div>
                            <img src={require('../assets/img/projects-icon.jpg')} alt=''></img>
                            <p>Mi proyecto de fin de curso es una aplicación web para generación de gráficos para la web mediante el uso de WebGL</p>
                        </div>
                        <div>
                            <img src={require('../assets/img/developer-icon.jpg')} alt=''></img>
                            <p>Busco desarrollarme en el sector como programador Web, tanto Frontend como Backend</p>
                        </div>
                    </div>
                    <div className='content'>
                        <h1>Marcos García García</h1>
                        <h2>Técnico Superior en Desarrollo de Aplicaciones Web</h2>
                    </div>
                </div>
            </div>
        </div>
    );

}