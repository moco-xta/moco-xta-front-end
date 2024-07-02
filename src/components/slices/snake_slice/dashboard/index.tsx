import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import SnakeGameData from './snake_game_data'
import Contacts from './contacts'
import PlaySnakeGameButton from '@/components/buttons/play_snake_game_button'
import ControlSnakeGameButtons from '@/components/buttons/control_snake_game_buttons'

import './index.scss'

export default function Dashboard() {
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  return (
    <div id='dashboard'>
      <div>
        <p>Score: {snakeGameState.score}</p>
        <p>Level: {snakeGameState.level}</p>
      </div>
      <Contacts />
      {/* <div id='top_dashboard'>
        <SnakeGameData />
      </div> */}
      {/* {!isPlaying && <PlaySnakeGameButton />} */}
      {/* {isPlaying &&  */}
      {/* <ControlSnakeGameButtons /> */}
      {/* } */}
    </div>
  )
}
