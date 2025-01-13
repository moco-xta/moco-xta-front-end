'use client'

import React from 'react'

import { PlayerPage } from '@/components/layout/pages'
import { LaboratoryCanvas } from '@/components/three/canvas'

export default function About() {
  return <PlayerPage canvas={<LaboratoryCanvas />} />
}
