import React from 'react'
import { Element } from 'react-scroll'
import Navbar        from './components/Navbar'
import About         from './components/About'
import Experience    from './components/Experience'
import Projects      from './components/Projects'
import Skills        from './components/Skills'
import Contact       from './components/Contact'
import DarkModeToggle from './components/DarkModeToggle'
import './styles/App.css'

function App() {
  return (
    <>
      <DarkModeToggle />
      <Navbar />
      <main>
        <Element name="about"><About /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
    </>
  )
}

export default App
