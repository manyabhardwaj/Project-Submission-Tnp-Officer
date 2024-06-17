import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/logo.png'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-background">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className='navbar-logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Internships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Mock Tests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Learning</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>


          </ul>

          <button className="btn btn-primary " type="button">Get Started</button>

        </div>
      </div>
    </nav>
  )
}
