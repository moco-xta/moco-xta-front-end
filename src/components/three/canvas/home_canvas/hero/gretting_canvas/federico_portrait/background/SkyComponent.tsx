import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sky } from '@/components/three/models/home/hero/gobelino/Sky'
import SunAndMoon from './SunAndMoon'

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
  })

  return (
    <group
      ref={skyComponentGroupRef}
      position={new THREE.Vector3(0, -5, 0)}
    >
      <Sky ref={skyComponentMeshRef} />
      <SunAndMoon timeline={timeline} />
    </group>
  )
}
