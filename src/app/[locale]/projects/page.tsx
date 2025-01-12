'use client'

import React from 'react'

import { PlayerPage } from '@/components/layout/pages'
import { ProjectsCanvas } from '@/components/three/canvas'

export default function Projects() {
  return <PlayerPage canvas={<ProjectsCanvas />} />
}
