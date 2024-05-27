import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch } from '@/redux/store'
import { setIsPlaying } from '@/redux/slice/snakeGameSlice'

import './index.scss'

export default function PlaySnakeGameButton() {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()

  function handleOnClick() {
    dispatch(setIsPlaying())
  }

  return (
    <div id='play_snake_game_button_container'>
      <button id='play_snake_game_button' onClick={handleOnClick}>Play</button>
    </div>
  )
}
