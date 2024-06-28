import React, { useEffect, useRef, useState } from 'react';

const Founders = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className="founders-container">
            <div className="content">
                <div className={`image-container ${isVisible ? 'visible' : ''}`} ref={imageRef}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Maj._Mohit_Sharma_%281_Para_SF%29_%28cropped%29.jpg" alt="Founders" />
                    <div className="founders-bar">
                        <p>Surya Vivek - Founder</p>
                    </div>
                </div>
                <div className="text-content">
                    <h2 className='tch'>From the founders</h2>
                    <p>We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.</p>
                    <p>Thank you for checking out Crest, and we hope to help you always be in stock!</p>
                    <h2 className="learn-more-button">Learn more</h2>
                </div>
            </div>
        </div>
    );
};

export default Founders;


