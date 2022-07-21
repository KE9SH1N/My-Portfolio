import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mishelmawn/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/KE9SH1N" target="_blank"><FaGithub/></a>
      <a href="https://www.facebook.com/mmmawn/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial