import React from 'react'
import Home from '../components/Home'
import About from './About'
import Excellence from './Excellence'
import Team from './Team'
import Brand from './Brand'
import dark from '../assets/images/dark.png'

const Index = () => {
  return (
    <>
      <Home />
      <About />
      <Excellence />
      <Team />
      <Brand />

      <img src={dark} className='dark_theme_icon' title='dark mode' alt='dark-theme' />
    </>
  )
}

export default Index