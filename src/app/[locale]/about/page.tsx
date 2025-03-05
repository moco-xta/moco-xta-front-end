'use client'

import React from 'react'

import PlayerPage from '@/components/layout/player_page'
import PlayerPageIntroduction from '@/components/layout/slices/player_page_greeting/introduction'
import LaboratoryCanvas from '@/components/three/canvas/laboratory/LaboratoryCanvas'

import './index.scss'

export default function About() {
  return (
    <PlayerPage
      id={'about_page'}
      introduction={<PlayerPageIntroduction translationPath={'ABOUT'} />}
      canvas={<LaboratoryCanvas />}
    />
  )
}
