import { useState, useRef } from 'react';
require('../assets/css/DescribedItemCopyable.css');

export default function DescribedItem({ src, sizeClass, description }) {

    const [hidden, setHidden] = useState(true);
    const [copied, setCopied] = useState(false);
    const descriptionRef = useRef(null);
    const imgRef = useRef(null);

    return (
        <div className="described-item">
            <img 
                className={sizeClass + ((!hidden) ? ' showing' : '')} 
                ref={imgRef} 
                onClick={(e) => {
                //use old value since it is not updated instantly. Hidden -> later visible. !hidden -> later hidden
                if (hidden) {
                    descriptionRef.current.focus();
                }
                setHidden(!hidden);
                }} 
                src={src} alt='Icon'></img>
            <div 
                className={'description' + ((hidden) ? ' hidden' : '')}
                ref={descriptionRef}
                onBlur={(e) => {
                    setHidden(true);
                }}
            >{description}
                <button
                    className={'copy-button' + ((copied) ? ' copied' : '')}
                    onClick={() => {
                        navigator.clipboard.writeText(description);
                        setCopied(true);
                    }}
                    onBlur={(e) => {
                        setCopied(false);
                        setHidden(true);
                    }}
                >
                    {(copied) ? 'Copied' : 'Copy'}
                    <img
                        className={'tick extra-sm-icon' + ((!copied) ? ' hidden' : '')}
                        src={require('../assets/img/tick-gif.gif')}
                        alt='Tick symbol that indicates that the text has been copied to the clipboard'></img>
                </button>
                <div className={'arrow' + ((hidden) ? ' hidden' : '')}></div>
            </div>
        </div>
    );
}