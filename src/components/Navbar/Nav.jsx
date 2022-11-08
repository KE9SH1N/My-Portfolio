import React from 'react'
import './Nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsBookmarkStar} from 'react-icons/bs'
import {BiOutline} from 'react-icons/bi'
import {AiOutlineContacts} from 'react-icons/ai'
import Scrollspy from "react-scrollspy";

const Nav = () => {
  return (
    <nav>
      <Scrollspy
        items={["header", "about", "experience", "portfolio", "contact"]}
        currentClassName="active">
            <a href='#header'  ><AiOutlineHome /></a>
            <a href='#about' ><FcAbout /></a>
            <a href='#experience'  ><BsBookmarkStar /></a>
            <a href='#portfolio'  ><BiOutline /></a>
            <a href='#contact'  ><AiOutlineContacts /></a>
      </Scrollspy> 
    </nav>
  )
}

export default Nav