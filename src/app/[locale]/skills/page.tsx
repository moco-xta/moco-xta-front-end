'use client'

import React from 'react'

import { Page } from '@/components/layout/pages'

import { RubiksCubeCanvas } from '@/components/three/canvas'

import { skillsData } from '@/data/skills/skillsData'

export default function Skills() {
  return (
    <Page
      pageData={skillsData}
      backgroundCanvas={<RubiksCubeCanvas />}
    />
  )
}
