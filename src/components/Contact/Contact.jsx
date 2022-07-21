import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_az3lwdl', 'template_1s25xo5', form.current, 'oHGgKsM4z_dMwZO4i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <hr />
      <h5 className='head'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mishelmawn.job@gmail.com</h5>
            <a href="mailto:mishelmawn.job@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Muttashim Mawn</h5>
            <a href="https://www.messenger.com/t/100056487696923/" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801315302640</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801315302640" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact