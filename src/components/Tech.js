require('../assets/css/Tech.css');

export default function React ({href, src, alt}) {
    return (
        <a className='tech' href={href}><img src={src} alt={alt}></img></a>
    );
}