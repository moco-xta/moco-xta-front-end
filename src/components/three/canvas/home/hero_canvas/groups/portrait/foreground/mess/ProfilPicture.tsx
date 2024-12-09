import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as profilPictureAnimationsConstants } from '@/constants/animations/home/hero/portrait/profilPictureAnimationsConstants.json'

interface ProfilPictureInterface {
  timeline: GSAPTimeline
}

export default function ProfilPicture({ timeline }: ProfilPictureInterface) {
  const [duration] = useState<number>(
    profilPictureAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    profilPictureAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
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
            opacity: profilPictureAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
          },
          '25%': {
            opacity: profilPictureAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: profilPictureAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
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
      material={portraitMaterial}
      receiveShadow
      castShadow
    />
  )
}
