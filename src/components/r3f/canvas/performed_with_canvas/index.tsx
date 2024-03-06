'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { iconsDataInterface } from '@/interfaces/components/r3f/iconsDataInterface'

import IconAnsible from '@/components/r3f/models/icons/IconAnsible'
import IconBlender from '@/components/r3f/models/icons/IconBlender'
import IconChatGpt from '@/components/r3f/models/icons/IconChatGpt'
import IconCss from '@/components/r3f/models/icons/IconCss'
import IconDocker from '@/components/r3f/models/icons/IconDocker'
import IconFigma from '@/components/r3f/models/icons/IconFigma'
import IconGithub from '@/components/r3f/models/icons/IconGithub'
import IconGsap from '@/components/r3f/models/icons/IconGsap'
import IconHtml from '@/components/r3f/models/icons/IconHtml'
import IconI18n from '@/components/r3f/models/icons/IconI18n'
import IconIllustrator from '@/components/r3f/models/icons/IconIllustrator'
import IconNextjs from '@/components/r3f/models/icons/IconNextjs'
import IconNpm from '@/components/r3f/models/icons/IconNpm'
import IconPhotoshop from '@/components/r3f/models/icons/IconPhotoshop'
import IconPostgresql from '@/components/r3f/models/icons/IconPostgresql'
import IconRedux from '@/components/r3f/models/icons/IconRedux'
import IconSpringboot from '@/components/r3f/models/icons/IconSpringboot'
import IconThreejs from '@/components/r3f/models/icons/IconThreejs'
import IconWebgl from '@/components/r3f/models/icons/IconWebgl'

import LogoSass from '@/components/r3f/models/logos/LogoSass'
import LogoRedux from '@/components/r3f/models/logos/LogoRedux'
import LogoGithub from '@/components/r3f/models/logos/LogoGithub'
import LogoFigma from '../../models/logos/LogoFigma'
import LogoHtml from '../../models/logos/LogoHtml'
import LogoNpm from '../../models/logos/LogoNpm'

function PerformedWithScene() {
  const iconAnsibleRef = useRef(new THREE.Object3D())
  const iconBlenderRef = useRef(new THREE.Object3D())
  const iconChatGptRef = useRef(new THREE.Object3D())
  const iconCssRef = useRef(new THREE.Object3D())
  const iconDockerRef = useRef(new THREE.Object3D())
  const logoFigmaRef = useRef(new THREE.Object3D())
  const logoGithubRef = useRef(new THREE.Object3D())
  const iconGsapRef = useRef(new THREE.Object3D())
  const logoHtmlRef = useRef(new THREE.Object3D())
  const iconI18nRef = useRef(new THREE.Object3D())
  const iconIllustratorRef = useRef(new THREE.Object3D())
  const iconNextjsRef = useRef(new THREE.Object3D())
  const logoNpmRef = useRef(new THREE.Object3D())
  const iconPhotoshopRef = useRef(new THREE.Object3D())
  const iconPostgresqlRef = useRef(new THREE.Object3D())
  const logoReduxRef = useRef(new THREE.Object3D())
  const logoSassRef = useRef(new THREE.Object3D())
  const iconSpringbootRef = useRef(new THREE.Object3D())
  const iconThreejsRef = useRef(new THREE.Object3D())
  const iconWebglRef = useRef(new THREE.Object3D())

  const refs = [
    logoFigmaRef,
    logoGithubRef,
    logoHtmlRef,
    logoNpmRef,
    logoReduxRef,
    logoSassRef,
  ]

  const logoData: iconsDataInterface = {
    total_length: 0,
    widths: [],
  }

  useEffect(() => {
    refs.forEach((ref) => {
      // @ts-ignore
      logoData.widths.push(ref.current.width)
    })
    let sum = 0
    refs.forEach((ref, index) => {
      if (index === 0) {
        ref.current.position.x = sum
        sum += logoData.widths[index] / 2
      } else {
        ref.current.position.x = sum + logoData.widths[index] / 2 + index * 0.5
        sum += logoData.widths[index]
      }
    })
    logoData.widths.forEach((width) => {
      logoData.total_length += width + 0.5
    })
  }, [])

  useFrame((state, delta, xrFrame) => {
    refs.forEach((ref) => {
      ref.current.position.x += delta
      if (ref.current.position.x > logoData.total_length / 2)
        ref.current.position.x -= logoData.total_length
    })
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 40]}
        fov={5}
      />
      <directionalLight
        position={[5, 5, 5]}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
      />
      <LogoFigma ref={logoFigmaRef} scale={new THREE.Vector3(0.7, 0.7, 1)} />
      <LogoGithub ref={logoGithubRef} />
      <LogoHtml ref={logoHtmlRef} />
      <LogoNpm ref={logoNpmRef} scale={new THREE.Vector3(0.4, 0.4, 1)} />
      <LogoRedux ref={logoReduxRef} />
      <LogoSass ref={logoSassRef} />
    </>
  )
}

export default function PerformedWithCanvas() {
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
      <PerformedWithScene />
    </Canvas>
  )
}
