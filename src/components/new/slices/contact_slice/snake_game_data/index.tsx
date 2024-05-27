import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import './index.scss'

export default function SnakeGameData() {
  const { level, score } = useSelector((state: RootState) => state.snakeGame)

  return (
    <div id='snake_game_data'>
      <p>Score: {score}</p>
      <p>Level: {level}</p>
    </div>
  )
}
