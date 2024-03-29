import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  return (
    
      <section id='contact'>
        <h5 className='head'>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>mishelmawn.job@gmail.com</h5>
              <a href="mailto:mishelmawn.job@gmail.com" target="" >Send a Message</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Muttashim Mawn</h5>
              <a href="https://www.messenger.com/t/100056487696923/" target="" >Send a Message</a>
            </article>

            <article className='contact__option'>
              <AiOutlineWhatsApp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+8801315302640</h5>
              <a href="https://api.whatsapp.com/send?phone=+8801315302640" target="">Send a Message</a>
            </article>
          </div>
          {/*END OF CONTACT OPTIONS*/}

          <form>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      
      </section>
    
    
  )
}

export default Contact