import React from 'react'

import Dashboard from './dashboard'
import SnakeGameCanvas from '../../three/canvas/snake_game_canvas/SnakeGameCanvas'

import './index.scss'

export default function ContactSlice() {
  return (
    <section id='contact_slice'>
      <Dashboard />
      <SnakeGameCanvas />
    </section>
  )
}
