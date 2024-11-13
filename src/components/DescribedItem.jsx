import { useState } from 'react';
require('../assets/css/DescribedItem.css');

export default function DescribedItem ({src, sizeClass, description}) {

    const [hidden, setHidden] = useState(true);

    return(
        <div className="described-item">
            <img onClick={() => {
                setHidden(!hidden);
            }} src={src} alt='Icon' className={sizeClass}></img>
            <p className={'description' + ((hidden) ? ' hidden' : '')}>{description}</p>
        </div>
    );
}