import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'
import { BiGame } from 'react-icons/bi'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { AppDispatch } from '@/redux/store'
import { setRubiksCubeStatus } from '@/redux/slices/rubiksCubeStateSlice'

import './index.scss'

export default function PlayRubiksCubeButton() {
  const t = useTranslations('SKILLS')
  const { playTimeline } = useGSAPTimelineContext()
  const dispatch = useDispatch<AppDispatch>()

  function handleOnCLick() {
    playTimeline()
    dispatch(setRubiksCubeStatus(true))
  }

  return (
    <button id='play_rubiks_cube_button' onClick={handleOnCLick}>
      {t('PLAY_RUBIKS_CUBE')}
      <BiGame />
    </button>
  )
}
