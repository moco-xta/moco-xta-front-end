'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPause, FaPlay } from 'react-icons/fa'

import { AppDispatch, RootState } from '@/redux/store'
import { pause } from '@/redux/slice/animations/heroAnimationSlice'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function PauseAnimationButton() {
  const dispatch = useDispatch<AppDispatch>()
  const { paused } = useSelector((state: RootState) => state.heroAnimationSlice)

  const handleOnClick = () => {
    dispatch(pause())
  }
  return (
    <div
      id='pause_animation_button'
      className='animation_pause_button_zIndex'
      style={{
        // background: !paused ? variables.success_light_color : variables.alert_light_color // TODO: Issue with variables!!! Weird...
        background: !paused ? 'chartreuse' : 'red',
      }}
    >
      {!paused ? <FaPause onClick={handleOnClick} /> : <FaPlay onClick={handleOnClick} />}
    </div>
  )
}
