import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface PortraitInterface {
  timeline: GSAPTimeline
}

export default function Portrait({ timeline }: PortraitInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.SUBS.PORTRAIT.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.SUBS.PORTRAIT.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

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
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.SUBS.PORTRAIT
                .ANIMATION.MATERIAL['0_PERCENT'].OPACITY,
          },
          '20%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.SUBS.PORTRAIT
                .ANIMATION.MATERIAL['20_PERCENT'].OPACITY,
          },
          easeEach:
            heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.SUBS.PORTRAIT.ANIMATION
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
