import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import { Sky } from '@/components/three/models/home/hero/gobelino/Sky'
import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import { getSceneDelay } from '@/helpers/animationHelpers'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface SkyComponentInterface {
  timeline: GSAPTimeline
}

export default function SkyComponent({ timeline }: SkyComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const skyComponentGroupRef = useRef<THREE.Group>(null!)
  const skyComponentMeshRef = useRef<THREE.Mesh>(null!)
  const sunAndMoonBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // POSITION
    timeline.to(
      // @ts-ignore
      skyComponentGroupRef.current.position,
      {
        keyframes: {
          '0%': { y: -5 },
          '33%': { y: 0 },
          easeEach: 'power1.in',
        },
        duration: duration,
      },
      delay,
    )

    // COLOR
    timeline.to(
      // @ts-ignore
      skyComponentMeshRef.current.material.color,
      {
        keyframes: {
          '0%': { r: 0.23137254901960785, g: 0.38823529411764707, b: 1 },
          '100%': { r: 0.00784313725490196, g: 0.00784313725490196, b: 0.1411764705882353 },
          easeEach: 'power1.in',
        },
        duration: duration,
      },
      delay,
    )

    // OPACITY
    timeline.to(
      // @ts-ignore
      skyComponentMeshRef.current.material,
      {
        keyframes: {
          '0%': { opacity: 0 },
          '33%': { opacity: 1 },
          easeEach: 'power1.in',
        },
        duration: duration,
      },
      delay,
    )

    timeline.to(
      sunAndMoonBoxGroupRef.current.rotation,
      {
        keyframes: {
          '0%': { z: THREE.MathUtils.degToRad(66) },
          '66%': { z: THREE.MathUtils.degToRad(-33) },
          '100%': { z: THREE.MathUtils.degToRad(-213) },
          easeEach: 'power2.out',
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <group
      ref={skyComponentGroupRef}
      position={new THREE.Vector3(0, -5, 0)}
    >
      <Sky ref={skyComponentMeshRef} />
      <Box
        ref={sunAndMoonBoxGroupRef}
        args={[1, 6, 1]}
        rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(66))}
        material={boxGroupMaterial}
      >
        <SunComponent position={new THREE.Vector3(0, 3, 0)} />
        <MoonComponent position={new THREE.Vector3(0, -3, 0)} />
      </Box>
    </group>
  )
}
