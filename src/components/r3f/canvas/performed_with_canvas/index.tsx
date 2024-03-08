'use client'

import React, { Ref, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { iconsDataInterface } from '@/interfaces/components/r3f/iconsDataInterface'

import LogoRedux from '@/components/r3f/models/logos/LogoRedux'
import LogoGithub from '@/components/r3f/models/logos/LogoGithub'
import LogoFigma from '../../models/logos/LogoFigma'
import LogoHtml from '../../models/logos/LogoHtml'
import LogoNpm from '../../models/logos/LogoNpm'
import LogoSass from '../../models/logos/LogoSass'

function PerformedWithScene() {
  const logoFigmaRef = useRef(new THREE.Object3D())
  const logoGithubRef = useRef(new THREE.Object3D())
  const logoHtmlRef = useRef(new THREE.Object3D())
  const logoNpmRef = useRef(new THREE.Object3D())
  const logoReduxRef = useRef(new THREE.Object3D())
  const logoSassRef = useRef<THREE.Mesh>(new THREE.Mesh())

  const refs = [
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
      {/* <LogoFigma
        ref={logoFigmaRef}
        scale={new THREE.Vector3(0.7, 0.7, 1)}
      />
      <LogoGithub ref={logoGithubRef} />
      <LogoHtml ref={logoHtmlRef} />
      <LogoNpm
        ref={logoNpmRef}
        scale={new THREE.Vector3(0.4, 0.4, 1)}
      />
      <LogoRedux ref={logoReduxRef} /> */}
      {/* <LogoSass ref={logoSassRef} /> */}
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
