'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { IconBlender } from '@/components/r3f/models/icons/IconBlender'
import { IconChatGpt } from '@/components/r3f/models/icons/IconChatGpt'
import { IconDocker } from '@/components/r3f/models/icons/IconDocker'
import { IconFigma } from '@/components/r3f/models/icons/IconFigma'
import { IconGithub } from '@/components/r3f/models/icons/IconGithub'
import { IconGsap } from '@/components/r3f/models/icons/IconGsap'
import { IconNextjs } from '@/components/r3f/models/icons/IconNextjs'
import { IconPostgresql } from '@/components/r3f/models/icons/IconPostgresql'
import { IconRedux } from '@/components/r3f/models/icons/IconRedux'
import { IconSass } from '@/components/r3f/models/icons/IconSass'
import { IconSpringboot } from '@/components/r3f/models/icons/IconSpringboot'
import { IconThreejs } from '@/components/r3f/models/icons/IconThreejs'

export default function PerformedWithScene() {
  return (
    <Canvas
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 7]}
        fov={25}
      />
      <directionalLight
        position={[0, 0, 5]}
        castShadow
      />
      <ambientLight position={[3, 3, 3]} />
      <IconBlender />
      <IconChatGpt />
      <IconDocker />
      <IconFigma />
      <IconGithub />
      <IconGsap />
      <IconNextjs />
      <IconPostgresql />
      <IconRedux />
      <IconSass />
      <IconSpringboot />
      <IconThreejs />
    </Canvas>
  )
}
