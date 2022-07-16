import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <section className="container header__container">
      <h4>Hello I'm</h4>
      <h1>Mishel Mawn</h1>
      <h5 className='text-light'>FrontEnd Developer</h5>

      <CTA/>

      <div className='me'>
        <img src={ME} alt="Me" />
      </div>


      <HeaderSocial/>

      

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </section>

    
  )
}

export default Header