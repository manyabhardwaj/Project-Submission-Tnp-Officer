import React from 'react';
import PropTypes from 'prop-types';
import './Testimonial.css';
import Instructor from "../images/profile.png"

export default function Testimonial(props) {
  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Testimonials</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <img src={Instructor} alt="Instructor" className='card-image-top' />
              <h4 className="card-title">Learner Name</h4>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <img src={Instructor} alt="Instructor" className='card-image-top' />
              <h4 className="card-title">Learner Name</h4>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <img src={Instructor} alt="Instructor" className='card-image-top' />
              <h4 className="card-title">Learner Name</h4>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}