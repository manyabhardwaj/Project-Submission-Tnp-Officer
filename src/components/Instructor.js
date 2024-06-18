import React, { useState, useRef } from 'react';
import InstructorImage from "../images/profile.png";
import '../App.css';

const instructors = [
    {
        name: "Instructor 1",
        title: "Post Instructor @TNP Officer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, nisi nostrum modi iste illo officiis neque? Doloribus consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.",
        image: InstructorImage
    },
    {
        name: "Instructor 2",
        title: "Senior Instructor @TNP Officer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, nisi nostrum modi iste illo officiis neque? Doloribus consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.",
        image: InstructorImage
    },
    {
        name: "Instructor 3",
        title: "Head Instructor @TNP Officer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, nisi nostrum modi iste illo officiis neque? Doloribus consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.",
        image: InstructorImage
    }
];

export default function Body() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const carouselRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + instructors.length) % instructors.length);
    };

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const difference = touchStartX.current - touchEndX.current;
        const threshold = 100;

        if (difference > threshold) {
            handleNext();
        } else if (difference < -threshold) {
            handlePrev();
        }
    };

    return (
        <div className="container my-5 bg-blue">
            <div className="instructor-title d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Our Instructors</h1>
                    <p>Learn from Our Experienced and Dedicated Instructors.</p>
                </div>
                <div className="buttons">
                    <button onClick={handlePrev} className="btn btn-primary mx-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={handleNext} className="btn btn-primary mx-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <hr />
            <div
                className={`container-content my-4 ${direction}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={carouselRef}
            >
                <div className="card-container d-flex">
                    <img src={instructors[currentIndex].image} alt="Instructor" className='instructor-image' />
                    <div className="right">
                        <h3>{instructors[currentIndex].name}</h3>
                        <h5>{instructors[currentIndex].title}</h5>
                        <p>{instructors[currentIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
