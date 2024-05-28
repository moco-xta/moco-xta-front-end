import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/redux/store'
import { setNextMove } from '@/redux/slice/snakeGameSlice'

import './index.scss'

export default function ControlSnakeGameButtons() {
  const dispatch = useDispatch<AppDispatch>()

  function handleOnClickLeft() {
    dispatch(setNextMove('ArrowLeft'))
  }

  function handleOnClickRight() {
    dispatch(setNextMove('ArrowRight'))
  }
  
  return (
    <div id='controls_snake_game_buttons'>
      <span onClick={handleOnClickLeft}>{'<'}</span>
      <span onClick={handleOnClickRight}>{'>'}</span>
    </div>
  )
}
