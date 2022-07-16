import React from 'react'
import './About.css'
import ABOUT from '../../assets/about.jpg'

import {MdOutlineSportsEsports} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'
import {IoPartlySunnyOutline} from 'react-icons/io5'
import {MdOutlineSpeed} from 'react-icons/md'
import {SiCivicrm} from 'react-icons/si'
import {MdVideoLibrary} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
      <hr />
      <h5 className='head'>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ABOUT} alt="About Image" />
            </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <MdOutlineSportsEsports className='about__icon'/>
                <h5>Esports Athlete</h5>
                <small></small>
              </article>

              <article className='about__card'>
                <HiUserGroup className='about__icon'/>
                <h5>Leadership</h5>
                <small></small>
              </article>

              <article className='about__card'>
                <IoPartlySunnyOutline className='about__icon'/>
                <h5>Adaptive</h5>
                <small></small>
              </article>

              <article className='about__card'>
                <MdOutlineSpeed className='about__icon'/>
                <h5>Fast Learner</h5>
                <small></small>
              </article>

              <article className='about__card'>
                <SiCivicrm className='about__icon'/>
                <h5>Social</h5>
                <small></small>
              </article>

              <article className='about__card'>
                <MdVideoLibrary className='about__icon'/>
                <h5>Content Creator</h5>
                <small></small>
              </article>
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolore totam eaque,
              ullam modi adipisci debitis delectus! Quidem repellat cupiditate ipsa odit id nemo ipsum iste
              impedit dolores, recusandae voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Perspiciatis dolore totam eaque, ullam modi adipisci debitis delectus! Quidem repellat cupiditate 
              ipsa odit id nemo ipsum iste impedit dolores, recusandae voluptatem.
            </p>

            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About