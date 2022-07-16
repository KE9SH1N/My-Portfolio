import React from 'react'
import './Nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsBookmarkStar} from 'react-icons/bs'
import {BiOutline} from 'react-icons/bi'
import {AiOutlineContacts} from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''} ><FcAbout/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''} ><BsBookmarkStar/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav=== '#portfolio' ? 'active' : ''}><BiOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''} ><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav