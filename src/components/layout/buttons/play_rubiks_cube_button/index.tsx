import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'
import { GrGamepad } from 'react-icons/gr'

import type { TRubiksCubeStatus } from '@/types/redux/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { AppDispatch } from '@/redux/store'
import { setRubiksCubeStatus } from '@/redux/slices/rubiksCubeStateSlice'

import './index.scss'

export default function PlayRubiksCubeButton() {
  const t = useTranslations('SKILLS')
  // const { camera } = useThree()
  const { playTimeline } = useGSAPTimelineContext()
  const dispatch = useDispatch<AppDispatch>()

  function handleOnCLick() {
    playTimeline()
    dispatch(setRubiksCubeStatus('mix' as TRubiksCubeStatus))
    // const { x, y, z } = getCameraDestinationPosition({ x: 0, y: 0, z: 0 }, camera.position, 10)
    /* gsap.to(camera.position, {
      x: x, y: y, z: z,
      duration: 1,
      delay: 0.5,
    }) */
  }

  return (
    <button
      id='play_rubiks_cube_button'
      className='sdm_item_left'
      onClick={handleOnCLick}
    >
      {t('PLAY_RUBIKS_CUBE')}
      <GrGamepad />
    </button>
  )
}
