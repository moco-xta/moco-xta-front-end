'use client'

import React from 'react'

import { PlayerPage } from '@/components/layout/pages'
import PlayerPageIntroduction from '@/components/layout/pages/page/contents/sections/player_page_greeting/introduction'
import { ProjectsCanvas } from '@/components/three/canvas'

export default function Projects() {
  return (
    <PlayerPage
      introduction={<PlayerPageIntroduction translationPath={'PROJECTS'} />}
      canvas={<ProjectsCanvas />}
    />
  )
}
