import React, { useState } from 'react'

const Speciality = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg',
            title: 'Ease of use, for everyone',
            description: 'With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.',
        },
        {
            imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg',
            title: 'Purpose-built & ever-improving tech',
            description: 'Our demand forecasting engine has been meticulously built, while our ML engine constantly trains on years of data and is ever evolving',
        },
        {
            imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png',
            title: 'Deep domain expertise',
            description: 'Our team members have years of experiance leading supply chains for businesses ranging from $10M to $10B',
        },
        {
            imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg',
            title: 'A focus on KPIs that matter',
            description: 'Our tools help you make decisions to grow  your business. Everything works towards improving cash flow and product availability',
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
    

    return (
      <div className='special'>
        <h2 className='head'><b>Get Crest and get...</b></h2>
        <div className="container1">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-content">
                            <img src={slide.imgSrc} alt={slide.title} />
                            <div className="text">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button className="nav-button prev-button" onClick={prevSlide}>&lt;</button>
                <button className="nav-button next-button" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
      </div>
    )
};

export default Speciality;