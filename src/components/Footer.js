import React from 'react'
import Instaicon from '../images/instagram logo..png'
import Linkedinicon from '../images/linkedin.png'
import Telegramicon from '../images/telegram.png'

export default function Footer() {
  return (
    <div className="footer">
      <h1>VAST COMMUNITY OF STUDENTS</h1>
      <div className="social-media">
        <div className='social-media-icon' >
          <p>2.5k+</p>
          <img src={Instaicon} alt=""  className='icon'/>
        </div>
        <div className='social-media-icon' >
          <p>50k+</p>
          <img src={Telegramicon} alt="" className='icon'/>
        </div>
        <div className='social-media-icon' >
          <p>29k+</p>
          <img src={Linkedinicon} alt=""  className='icon'/>
        </div>
      </div>
    </div>
  )
}
