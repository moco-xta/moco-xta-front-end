import React from 'react'
import { RootState } from '@/redux/store'

import SnakeGameData from './snake_game_data'
import PlaySnakeGameButton from '../../buttons/play_snake_game_button'
import SnakeGameCanvas from '../../three/canvas/snake_game_canvas/SnakeGameCanvas'

import './index.scss'
import { useSelector } from 'react-redux'

export default function ContactSlice() {
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)

  return (
    <section id='contact_slice'>
      <SnakeGameData />
      {!isPlaying && <PlaySnakeGameButton />}
      <SnakeGameCanvas />
    </section>
  )
}
