'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { IconAnsible } from '@/components/r3f/models/icons/IconAnsible'
import { IconBlender } from '@/components/r3f/models/icons/IconBlender'
import { IconChatGpt } from '@/components/r3f/models/icons/IconChatGpt'
import { IconCss } from '@/components/r3f/models/icons/IconCss'
import { IconDocker } from '@/components/r3f/models/icons/IconDocker'
import { IconFigma } from '@/components/r3f/models/icons/IconFigma'
import { IconGithub } from '@/components/r3f/models/icons/IconGithub'
import { IconGsap } from '@/components/r3f/models/icons/IconGsap'
import { IconHtml } from '@/components/r3f/models/icons/IconHtml'
import { IconIllustrator } from '@/components/r3f/models/icons/IconIllustrator'
import { IconNextjs } from '@/components/r3f/models/icons/IconNextjs'
import { IconPhotoshop } from '@/components/r3f/models/icons/IconPhotoshop'
import { IconPostgresql } from '@/components/r3f/models/icons/IconPostgresql'
import { IconRedux } from '@/components/r3f/models/icons/IconRedux'
import { IconSass } from '@/components/r3f/models/icons/IconSass'
import { IconSpringboot } from '@/components/r3f/models/icons/IconSpringboot'
import { IconThreejs } from '@/components/r3f/models/icons/IconThreejs'
import { IconWebgl } from '@/components/r3f/models/icons/IconWebgl'

export default function PerformedWithScene() {

  const iconAnsibleRef = useRef(null)
  const iconBlenderRef = useRef(null)
  const iconChatGptRef = useRef(null)
  const iconCssRef = useRef(null)
  const iconDockerRef = useRef(null)
  const iconFigmaRef = useRef(null)
  const iconGithubRef = useRef(null)
  const iconGsapRef = useRef(null)
  const iconHtmlRef = useRef(null)
  const iconIllustratorRef = useRef(null)
  const iconNextjsRef = useRef(null)
  const iconPhotoshopRef = useRef(null)
  const iconPostgresqlRef = useRef(null)
  const iconReduxRef = useRef(null)
  const iconSassRef = useRef(null)
  const iconSpringbootRef = useRef(null)
  const iconThreejsRef = useRef(null)
  const iconWebglRef = useRef(null)

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
      <IconAnsible ref={iconAnsibleRef} />
      <IconBlender ref={iconBlenderRef} />
      <IconChatGpt ref={iconChatGptRef} />
      <IconCss ref={iconCssRef} />
      <IconDocker ref={iconDockerRef} />
      <IconFigma ref={iconFigmaRef} />
      <IconGithub ref={iconGithubRef} />
      <IconGsap ref={iconGsapRef} />
      <IconHtml ref={iconHtmlRef} />
      <IconIllustrator ref={iconIllustratorRef} />
      <IconNextjs ref={iconNextjsRef} />
      <IconPhotoshop ref={iconPhotoshopRef} />
      <IconPostgresql ref={iconPostgresqlRef} />
      <IconRedux ref={iconReduxRef} />
      <IconSass ref={iconSassRef} />
      <IconSpringboot ref={iconSpringbootRef} />
      <IconThreejs ref={iconThreejsRef} />
      <IconWebgl ref={iconWebglRef} />
    </Canvas>
  )
}
