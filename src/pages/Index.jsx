import Footer from '../components/Footer.jsx';
import Tech from '../components/Tech.jsx';
import DescribedItemCopyable from '../components/DescribedItemCopyable.jsx';

require('../assets/css/Index.css');

export default function index() {
    return (
        <div className='page index'>
            <div className='content'>
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
                                    href='https://vuejs.org/'
                                    src={require('../assets/img/vue.png')}
                                    alt='Vue Logo'
                                />
                                <Tech
                                    href='https://laravel.com/'
                                    src={require('../assets/img/laravel.png')}
                                    alt='Laravel Logo'
                                />
                                <Tech
                                    href='https://nextjs.org/'
                                    src={require('../assets/img/nextjs.png')}
                                    alt='NextJS Logo'
                                />
                                <Tech
                                    href='https://www.gatsbyjs.com/'
                                    src={require('../assets/img/gatsby.png')}
                                    alt='Gatsby Logo'
                                />
                                <Tech
                                    href='https://svelte.dev/'
                                    src={require('../assets/img/svelte.png')}
                                    alt='Svelte Logo'
                                />
                                <Tech
                                    href='https://nodejs.org/en/'
                                    src={require('../assets/img/nodejs.png')}
                                    alt='NodeJS Logo'
                                />
                                <Tech
                                    href='https://httpd.apache.org/'
                                    src={require('../assets/img/apache.png')}
                                    alt='Apache'
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
                            <header>
                                <main>
                                    <h1>Marcos García García</h1>
                                    <div>
                                        <h2>Técnico Superior en Desarrollo de Aplicaciones Web</h2>
                                        <img className='bg-icon' src={require('../assets/img/cap.png')} alt='Birrete de graduación'></img>
                                    </div>
                                </main>
                                <aside>
                                    <div className='image' style={{
                                        backgroundImage: 'url(' + require('../assets/img/marcos.png') + ')'
                                    }}></div>
                                </aside>
                            </header>
                            <main>
                                <h1>Sobre Mí</h1>
                                <p>¡Hola! Mi nombre es Marcos y soy programador web. Estudié para ello el CFGS Desarrollo de Aplicaciones
                                    Web en el IES Bernaldo de Quirós durante el periodo 2021-2023.
                                </p>
                                <p>Tras finalizar mis estudios, salí conociendo los lenguajes de programación y tecnologías más utilizadas
                                    en el desarrollo web, como lo son HTML, CSS, Javascript, Java, PHP, MySQL, SQL Server y otros.
                                </p>
                                <p>Tras finalizar el curso, realicé 3 meses de prácticas en Oviedo, utilizando Wordpress para realizar páginas
                                    web simples para publicidad.
                                </p>
                                <p>Como nota especial, debido al buen expediente que obtuve durante el curso, fui nominado a los
                                    Premios Mierense del Año por mejor expediente académico de Bachillerato. Este a continuación es un
                                    artículo de la Nueva España que cubrió la noticia aquel día: <a href='https://www.lne.es/cuencas/2024/04/13/mieres-destaca-premia-compromiso-social-100984414.html'>Artículo</a>
                                </p>
                                <p>Desde entonces, he estado aprendiendo a utilizar diversos frameworks que permiten ahorrar tiempo a la
                                    hora de realizar páginas web personalizadas, como Vue, React o Laravel. Estos frameworks aportan mucho
                                    valor a los proyectos, otorgándoles una estructura,  múltiples bibliotecas, bases de ciberseguridad,
                                    preimplementación de la capa de acceso a datos, reactividad y enrutamiento, entre otras ventajas.
                                </p>
                                <ul className='socials'>
                                    <li><a href='https://www.linkedin.com/in/marcos-garcia-garcia-dev/'><img src={require('../assets/img/linkedin.png')} alt='Enlace al perfil de Marcos en LinkedIn'></img></a></li>
                                    <li><a href='https://github.com/marcosggdev'><img src={require('../assets/img/github-logo.png')} alt='Enlace al perfil de Marcos en Github'></img></a></li>
                                    <li><DescribedItemCopyable
                                        src={require('../assets/img/gmail.png')}
                                        sizeClass='sm-icon'
                                        description='marcosggdev@gmail.com'></DescribedItemCopyable>
                                    </li>
                                </ul>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}