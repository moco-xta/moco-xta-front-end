import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as portraitAnimationsConstants } from '@/constants/animations/home/hero/federico_portrait/portraitAnimationsConstants.json'

interface PortraitInterface {
  timeline: GSAPTimeline
}

export default function Portrait({ timeline }: PortraitInterface) {
  const [duration] = useState<number>(
    portraitAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    portraitAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
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
            opacity: portraitAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
          },
          '25%': {
            opacity: portraitAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: portraitAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
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
