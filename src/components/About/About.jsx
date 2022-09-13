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
              <img src={ABOUT} alt="" />
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
            Hi! <br /> &emsp;
            This is Md. Muttashim Mishel Mawn. I am from Kalikapur, Natore, Rajshahi. Currently I lived in Khilkhet, Nikunja-2, Dhaka-1229. I am from a nuclear family. My father was an Air force sergeant. Currently he is working in Square group. My mother is a house wife & have an elder brother who was working in South East Bank but
            currently he is working on his own local business. I have done my SSC from st joseph's high school & HSC from Birshrestho Munshi Abdur Rouf Public Collage. Then i admited in North South University at computer science and engineering. I am kind of introvert person but i have a good communications among people with common interest.
            </p>
            

          <p>And last but not the least i am a front-end web developer who is
            proficient in frameworks like react & vue js.
            But i have that energy to learn new stuff
            about the latest technologies.</p>

            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About