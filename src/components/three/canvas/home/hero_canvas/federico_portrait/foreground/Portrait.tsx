import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface PortraitInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function Portrait({ timeline, duration, delay }: PortraitInterface) {
  const portraitMeshRef = useRef<THREE.Mesh>(null!)

  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PORTRAIT)
  portraitMap.magFilter = THREE.NearestFilter

  const portraitMaterial = new THREE.MeshStandardMaterial({
    map: portraitMap,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      portraitMeshRef.current.material,
      {
        keyframes: {
          '0%': {
            opacity:
              federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.SUBS.PORTRAIT.ANIMATION
                .MATERIAL['0_PERCENT'].OPACITY,
          },
          '20%': {
            opacity:
              federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.SUBS.PORTRAIT.ANIMATION
                .MATERIAL['20_PERCENT'].OPACITY,
          },
          easeEach:
            federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.SUBS.PORTRAIT.ANIMATION
              .MATERIAL.EACH_EASE,
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <Plane
      ref={portraitMeshRef}
      args={[7.5, 7.5]}
      position={[0, 5, 0]}
      material={portraitMaterial}
      receiveShadow
      castShadow
    />
  )
}
