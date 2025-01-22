import React from 'react'
import { useDispatch } from 'react-redux'

import type { TRubiksCubeStatus } from '@/types/redux/types'

import { AppDispatch } from '@/redux/store'
import { setRubiksCubeStatus } from '@/redux/slices/rubiksCubeStateSlice'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function QuitRubiksCube() {
  const dispatch = useDispatch<AppDispatch>()
  const { timeline } = useGSAPTimelineContext()

  function handleOnClick() {
    dispatch(setRubiksCubeStatus('off' as TRubiksCubeStatus))
    timeline.play()
  }

  return <button onClick={handleOnClick}>Quit</button>
}
