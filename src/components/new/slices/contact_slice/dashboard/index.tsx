import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import SnakeGameData from './snake_game_data'
import Contacts from './contacts'
import PlaySnakeGameButton from '@/components/new/buttons/play_snake_game_button'
import ControlSnakeGameButtons from '@/components/new/buttons/control_snake_game_buttons'

import './index.scss'

export default function Dashboard() {
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)

  return (
    <div id='dashboard'>
      <div id='top_dashboard'>
        <SnakeGameData />
        <Contacts />
      </div>
      {!isPlaying && <PlaySnakeGameButton />}
      {/* {isPlaying &&  */}
      <ControlSnakeGameButtons />
      {/* } */}
    </div>
  )
}
