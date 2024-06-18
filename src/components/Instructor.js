import React from 'react'
import PropTypes from 'prop-types'
import Instructor from "../images/profile.png"

export default function body(props) {
  return (
    <div className="container my-5 bg-blue">
      <div className="container-content my-4">
        <h1>Our Instructors</h1>
        <p>Learn from Our Experienced and Dedicated Instructors.</p>
        <hr />
        <div className="d-flex">
          <div className="left-container">
            <img src={Instructor} alt="Instructor"  className='instructor-image'/>
          </div>
          <div className="Right-container">
            <h3>Instructor Name</h3>
            <h5>Post Instructor @TNP Officer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, nisi nostrum modi iste illo officiis neque? Doloribus consequatur quaerat, quis iste quae beatae veniam accusantium suscipit ducimus. Qui, unde.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
