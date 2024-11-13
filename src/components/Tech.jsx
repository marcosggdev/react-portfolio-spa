require('../assets/css/Tech.css');

export default function React ({href, src, alt}) {
    return (
        <a className='tech' href={href}>
            <div className='image' style={{
                backgroundImage: 'url('+src+')'
            }}></div>
        </a>
    );
}