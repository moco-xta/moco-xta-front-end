import React from 'react'
import { useDispatch } from 'react-redux'
import { FaRunning } from 'react-icons/fa'

import { AppDispatch } from '@/redux/store'
import { setRubiksCubeIsLocked } from '@/redux/slices/rubiksCubeStateSlice'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function QuitRubiksCube() {
  const dispatch = useDispatch<AppDispatch>()
  const { timeline } = useGSAPTimelineContext()

  function handleOnClick() {
    dispatch(setRubiksCubeIsLocked(true))
    timeline.seek('quit').play()
  }

  return (
    <button
      id='quit_rubiks_cube'
      onClick={handleOnClick}
    >
      <FaRunning />
      QUIT
    </button>
  )
}
