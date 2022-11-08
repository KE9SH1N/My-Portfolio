import React from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Navbar/Nav'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home