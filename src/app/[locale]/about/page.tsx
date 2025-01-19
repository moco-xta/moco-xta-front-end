'use client'

import React from 'react'

import { PlayerPage } from '@/components/layout/pages'
import PlayerPageIntroduction from '@/components/layout/pages/page/contents/sections/player_page_greeting/introduction'
import { LaboratoryCanvas } from '@/components/three/canvas'

export default function About() {
  return (
    <PlayerPage
      introduction={<PlayerPageIntroduction translationPath={'ABOUT'} />}
      canvas={<LaboratoryCanvas />}
    />
  )
}
