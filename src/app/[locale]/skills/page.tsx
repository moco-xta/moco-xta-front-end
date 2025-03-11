'use client'

import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import RubiksCubeCanvas from '@/components/three/canvas/rubiks_cube/RubiksCubeCanvas'

import { timelineDefaultValues } from '@/data/skills/timelineData'

import './index.scss'

export default function Skills() {
  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='skills_page'>
        <RubiksCubeCanvas />
      </div>
    </GSAPTimelineProvider>
  )
}
