import React, { useState, useEffect } from 'react';
import './Carousel.css';
import bin from './bin.jpg';
import evImage from './event.png';

const Carousel = (props) => {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    // Move to the next slide
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    // Move to the previous slide
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < (length - 1)) {
                setCurrentIndex(prevState => prevState + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentIndex, length]);

    return (
        <div className="flex flex-col h-[500px]">
            <div className="flex relative h-[500px]">
                {currentIndex > 0 && (
                    <button className="hover:border-white bg-black bg-opacity-20 left-arrow" onClick={prev}> &lt; </button>
                )}
                <div className="overflow-hidden h-[500px]">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                {currentIndex < (length - 1) && (
                    <button className="hover:border-white bg-black bg-opacity-20 right-arrow " onClick={next}>&gt;</button>
                )}
            </div>
        </div>
    );
};

export default Carousel;
