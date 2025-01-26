import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'
import { GrGamepad } from 'react-icons/gr'

import { AppDispatch, RootState } from '@/redux/store'
import { setRubiksCubeIsLocked } from '@/redux/slices/rubiksCubeStateSlice'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function PlayRubiksCubeButton() {
  const t = useTranslations('SKILLS')
  const dispatch = useDispatch<AppDispatch>()
  const { rubiksCubeIsMixed /* , status */ } = useSelector(
    (state: RootState) => state.rubiksCubeState,
  )
  const { timeline } = useGSAPTimelineContext()

  function handleOnCLick() {
    dispatch(setRubiksCubeIsLocked(false))
    timeline.seek('play').play()
  }

  return (
    <button
      id='play_rubiks_cube_button'
      className='sdm_item_left'
      onClick={handleOnCLick}
      disabled={!rubiksCubeIsMixed}
    >
      {t('PLAY_RUBIKS_CUBE')}
      <GrGamepad />
    </button>
  )
}
