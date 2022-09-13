import React from 'react'
import './Footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import { SiYoutube } from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href="www.google.com" className='footer__logo'>Mishel</a>

      <ul className='permalinks'>
        <li><a href="header">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mmmawn/"><FaFacebookF/></a>
        <a href="https://twitter.com/MuttashimM"><FiTwitter/></a>
        <a href="https://www.youtube.com/channel/UCOd0uWuCuHZ8_uqnun9YlQg"><SiYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mishel Mawn All Rights Reserve</small>
      </div>
    </footer>
  )
}

export default Footer