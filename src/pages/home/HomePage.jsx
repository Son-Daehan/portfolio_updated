import React from 'react'
import Projects from '../../components/Projects'
import MainHeader from '../../components/MainHeader'
import Skills from '../../components/Skills'
import './home.css'

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <Skills />
      <Projects />
      <hr className="footer_line"/>
    </>
  )
}

export default HomePage