import React from 'react'
import './FrontEnd.css'
import img1 from '../../../assets/myportfolio.PNG'
import img2 from '../../../assets/basicdashboard.PNG'
import img3 from '../../../assets/newsportal.PNG'
import img4 from '../../../assets/bookstore.PNG'
import img5 from '../../../assets/eveent.PNG'

const data = [
  {
    id: 1,
    image:img1,
    title: 'My Portfolio',
    description:'Its my own personal portfolio design using react framework.',
    github: 'https://github.com/KE9SH1N/My-Portfolio',
    demo:'https://mawn.me'
  },
  {
    id: 2,
    image: img2,
    title: 'Basic Dashboard',
    description: 'Basic Dashboard landing page design using react.',
    github: 'https://github.com/KE9SH1N/Basic-Dashboard',
    demo:'https://github.com/KE9SH1N/Basic-Dashboard'
  },
  {
    id: 3,
    image: img3,
    title: 'News Portal',
    description: 'Online news portal landing page design using html5, bootstrap css and js.',
    github: 'https://github.com/KE9SH1N/FocusBD-News-Portal',
    demo:'https://github.com/KE9SH1N/FocusBD-News-Portal'
  },
  {
    id: 4,
    image: img4,
    title: 'Book Store',
    description: 'Book store web design developed with react js.(On development-Json Api data server)',
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