import React from 'react'

import Hero from './hero'

import './index.scss'
import Disclamer from '../../disclamer'

export default function HomePage() {
  return (
    <div id='home_page'>
      <Hero />
      <Disclamer />
    </div>
  )
}
