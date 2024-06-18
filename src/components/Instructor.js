import React, { useState } from 'react';
import InstructorImage from "../images/profile.png"; // Assuming the image path is correct
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
        description: "Lorem ipsum dolor sit amet consectnisi nostrum modi iste illo officiis neque?  consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.",
        image: InstructorImage
    },
    {
        name: "Instructor 3",
        title: "Head Instructor @TNP Officer",
        description: " elit. Aliquid accusantium, nisi nostrum modi iste illo officiis neque? Doloribus consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.",
        image: InstructorImage
    }
];

export default function Body() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + instructors.length) % instructors.length);
    };

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
    };

    return (
        <div className="container my-5 bg-blue">
            <div className="instructor-title d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Our Instructors</h1>
                    <p>Learn from Our Experienced and Dedicated Instructors.</p>
                </div>
                <div className="buttons">
                    <button onClick={handlePrev} className="btn btn-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={handleNext} className="btn btn-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <hr />
            <div className={`container-content my-4 ${direction}`}>
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
