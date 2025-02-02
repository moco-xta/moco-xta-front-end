'use client'

import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { Page } from '@/components/layout/pages'
import { PlayRubiksCubeButton } from '@/components/layout/buttons'
import { RubiksCubeCanvas } from '@/components/three/canvas'

import { skillsData } from '@/data/skills/skillsData'
import { timelineDefaultValues } from '@/data/skills/rubiks_cube/timelineData'

export default function Skills() {
  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <Page
        pageData={skillsData}
        displayPage={rubiksCubeIsLocked}
        extraButtons={[<PlayRubiksCubeButton key={'play_rubiks_cube_button'} />]}
        backgroundCanvas={<RubiksCubeCanvas />}
      />
    </GSAPTimelineProvider>
  )
}
