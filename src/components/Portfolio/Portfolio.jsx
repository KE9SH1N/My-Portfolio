import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/myportfolio.PNG'
import img2 from '../../assets/basicdashboard.PNG'
import img3 from '../../assets/newsportal.PNG'
import img4 from '../../assets/bookstore.PNG'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image:img1,
    title: 'My Portfolio',
    github: 'https://github.com/KE9SH1N/My-Portfolio',
    demo:'https://mawn.me'
  },
  {
    id: 2,
    image: img2,
    title: 'Basic Dashboard',
    github: 'https://github.com/KE9SH1N/Basic-Dashboard',
    demo:'https://github.com/KE9SH1N/Basic-Dashboard'
  },
  {
    id: 3,
    image: img3,
    title: 'News Portal',
    github: 'https://github.com/KE9SH1N/FocusBD-News-Portal',
    demo:'https://github.com/KE9SH1N/FocusBD-News-Portal'
  },
  {
    id: 4,
    image: img4,
    title: 'Book Store',
    github: 'https://github.com/KE9SH1N/Book-Store',
    demo:'https://book-store-eight-green.vercel.app/'
  },
  {
    id: 5,
    image: img5,
    title: 'Title 5',
    github: 'https://github.com',
    demo:'https://github.com'
  },
  {
    id: 6,
    image: img6,
    title: 'Title 6',
    github: 'https://github.com',
    demo:'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <hr />
      <h5 className="head">
        My Recent Work
      </h5>

      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt="Portfolio" />
                </div>
                <h3>{title}</h3>
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