import React from 'react'
import Home from '../components/Home'
import Excellence from '../components/Excellence'
import Team from '../components/Team'
import Brand from '../components/Brand'
import dark from '../assets/images/dark.png'

const Index = () => {
  return (
    <>
      <Home />
      <Excellence />
      <Team />
      <Brand />

      <img src={dark} className='dark_theme_icon' title='dark mode' alt='dark-theme' />
    </>
  )
}

export default Index