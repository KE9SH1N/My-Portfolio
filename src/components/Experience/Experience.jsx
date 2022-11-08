import React from 'react'
import './Experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <hr />
      <h5 className='head'>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Programming</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Html</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Css</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Coefficient</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java Script</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Php-Laravel</h4>
                <small className='text-light'>Coefficient</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__others">
        <h3>Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Seo</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Graphics Design</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Video Editing</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Ms Office</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>UI/UX Design</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Computer Hardware and OS</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience