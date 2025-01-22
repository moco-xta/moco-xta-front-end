import React from 'react'
import { useDispatch } from 'react-redux'
import { gsap } from 'gsap'
import { useTranslations } from 'next-intl'
// import { BiGame } from 'react-icons/bi'
import { GrGamepad } from 'react-icons/gr'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { AppDispatch } from '@/redux/store'
import { setRubiksCubeStatus } from '@/redux/slices/rubiksCubeStateSlice'

import './index.scss'
import { TRubiksCubeStatus } from '@/types/redux/types'
import { useThree } from '@react-three/fiber'
import { getCameraDestinationPosition } from '@/helpers/rubiksCubeHelpers'

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
