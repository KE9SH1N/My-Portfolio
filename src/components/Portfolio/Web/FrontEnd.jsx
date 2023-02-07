import React from 'react'
import './FrontEnd.css'
import img1 from '../../../assets/myportfolio.PNG'
import img2 from '../../../assets/basicdashboard.PNG'
import img3 from '../../../assets/newsportal.PNG'
import img4 from '../../../assets/bookstore.PNG'
import img5 from '../../../assets/eveent.PNG'
import img6 from '../../../assets/ecova.PNG'
import img7 from '../../../assets/shoppe.PNG'

const data = [
  {
    id: 1,
    image:img1,
    title: 'My Portfolio',
    description:'Its my own responsive personal portfolio design using react framework.',
    github: 'https://github.com/KE9SH1N/My-Portfolio',
    demo:'https://mawn.me'
  },
  {
    id: 2,
    image: img2,
    title: 'Basic Dashboard',
    description: 'Basic Dashboard landing page design using react. Not responsive',
    github: 'https://github.com/KE9SH1N/Basic-Dashboard',
    demo:'https://basic-dashboard.vercel.app/'
  },
  {
    id: 3,
    image: img3,
    title: 'News Portal',
    description: 'Online responsive news portal landing page design using html5, bootstrap css and js.',
    github: 'https://github.com/KE9SH1N/FocusBD-News-Portal',
    demo:'https://ke9sh1n.github.io/FocusBD-News-Portal/Front-End/index.html'
  },
  {
    id: 4,
    image: img4,
    title: 'Book Store',
    description: 'Book store web design developed with react js.(On development-Tablet and Laptop responsiveness)',
    github: 'https://github.com/KE9SH1N/Book-Store',
    demo:'https://book-store-eight-green.vercel.app/'
  },
  {
    id: 5,
    image: img5,
    title: 'Eveent',
    description:'Figma to React App (pixel perfect design) and fetching data from json api.(On dev-Tablet and Laptop responsiveness).',
    github: 'https://github.com/KE9SH1N/Eveent',
    demo:'https://eveent.vercel.app/'
  },
  {
    id: 6,
    image: img6,
    title: 'Ecova',
    description:'Converted Design from bootstrap to tailwind css, using html-5 and tailwindcss.Complete responsive website',
    github: 'https://infiny-net.github.io/ecova/home-three',
    demo:'https://infiny-net.github.io/ecova/'
  },
  {
    id: 7,
    image: img7,
    title: 'Shoppe',
    description:'Converting a figma design to web design, using html-5, tailwindcss and js. On development. Responsiveness not yet done.',
    github: 'https://github.com/KE9SH1N/Shoppe',
    demo:'https://ke9sh1n.github.io/Shoppe/public/index.html'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title,description, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt="Portfolio" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target=''> Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default Portfolio