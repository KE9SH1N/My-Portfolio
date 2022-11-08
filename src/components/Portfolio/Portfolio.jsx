import React from 'react'
import './Portfolio.scss'

import { Link } from 'react-router-dom'

import FrontEnd from './Web/FrontEnd'

const Portfolio = () => {
  return (
      <section id='portfolio'>
          <hr />
          <h5 className="head">
              My Recent Work
          </h5>
          <h2>Portfolio</h2>

          <div className="portfolioContainer">
              <div class="filters">
                  <a href="#web" data-filter=".web" class="active">
                      Front-End
                  </a>
                  <a href="#graphics" data-filter=".graphics">
                      Graphics Design
                  </a>
                  <a href="#others" data-filter=".others">
                      Others
                  </a>
              </div>
              <div className="portfolioContents">
                <div className="portfolioContent active" id='web'>
                  <FrontEnd/>
                </div>
                <div className="portfolioContent" id='graphics'>
                  <FrontEnd/>
                </div>
                <div className="portfolioContent" id='others'>
                  <FrontEnd/>
                </div>
              </div>
          </div>

      </section>
  )
}

export default Portfolio