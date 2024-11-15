import { useState, useRef } from 'react';
require('../assets/css/DescribedItemCopyable.css');

export default function DescribedItem({ src, sizeClass, description }) {

    const [copied, setCopied] = useState(false);
    const [unfolded, setUnfolded] = useState(false);

    const imgRef = useRef(null);
    const itemRef = useRef(null);
    const buttonRef = useRef(null);

    return (
        <div 
            className={'described-item' + ((unfolded) ? ' unfolded' : '')}
            onClick={(e) => {
                //click on the component: can be over img or over description

                //if it wasnt unfolded
                if (!unfolded) {
                    //unfold it and focus it
                    itemRef.current.focus();
                    setUnfolded(true);
                } else {
                    //else if it was unfolded

                    //if click on img, fold it, else do nothing
                    if (e.target === imgRef.current) {
                        setUnfolded(false);
                    }
                }
            }}
            onBlur={(e) => {
                if (e.relatedTarget !== buttonRef.current && e.relatedTarget !== itemRef.current) {
                    setUnfolded(false);
                    setCopied(false);
                }
            }}
            tabIndex={0}
            ref={itemRef}
        >
            <img
                className={sizeClass}
                src={src} alt='Icon'
                ref={imgRef}
            ></img>
            <div
                className='description'
            >{description}
                <button
                    className={'copy-button' + ((copied) ? ' copied' : '')}
                    ref={buttonRef}
                    onClick={() => {
                        navigator.clipboard.writeText(description);
                        setCopied(true);
                    }}
                >
                    {(copied) ? 'Copied' : 'Copy'}
                    <img
                        className={'tick extra-sm-icon' + ((!copied) ? ' hidden' : '')}
                        src={require('../assets/img/tick-gif.gif')}
                        alt='Tick symbol that indicates that the text has been copied to the clipboard'></img>
                </button>
                <div className='arrow'></div>
            </div>
        </div>
    );
}