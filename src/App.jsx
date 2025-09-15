import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Skill from './component/Skill'
import Footer from './component/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Skill/>
    <Footer/>
      
    </>
  )
}

export default App
