import { useState, useEffect, useRef } from 'react';
import './ApplyButton.css';


const ApplyButton = ({ buttonRef }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowButton(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, [buttonRef]);

    return (
        <>
            <div className='buttonContainer'>
                {showButton && <button>Apply now!</button>}
            </div>
        </>
    )
}

export default ApplyButton;