'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import PerformedWithScene from '@/components/r3f/canvas/performed_with_canvas'
import RubiksCubeCanvas from '@/components/r3f/canvas/rubiks_cube_canvas'

import './index.scss'

export default function PerformedWith() {
  const t = useTranslations('HOME')
  return (
    <div id='performed_with_slice'>
      <div>{t('PERFORMED_WITH')}</div>
      <div id='perform_with_canvas_container'>
        <PerformedWithScene />
      </div>
      <div id='rubiks_cube_canvas_container'>
        <RubiksCubeCanvas />
      </div>
    </div>
  )
}
