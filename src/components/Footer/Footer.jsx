import React from 'react'
import './Footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mishel</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mishel Mawn All Rights Reserve</small>
      </div>
    </footer>
  )
}

export default Footer