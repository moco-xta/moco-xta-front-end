'use client'

import React from 'react'

import { PlayerPage } from '@/components/layout/pages'
import PlayerPageIntroduction from '@/components/layout/pages/page/contents/sections/player_page_greeting/introduction'
import { LaboratoryCanvas } from '@/components/three/canvas'
import Disclamer from '@/components/layout/disclamer'

export default function About() {
  return (
    <>
      <PlayerPage
        introduction={<PlayerPageIntroduction translationPath={'ABOUT'} />}
        canvas={<LaboratoryCanvas />}
      />
      <Disclamer translationKey={'ABOUT'} />
    </>
  )
}
