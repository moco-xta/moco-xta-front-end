import React, { useRef } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

// import HeptagramComponent from './HeptagramComponent'

import { getSceneDelay } from '@/helpers/animationHelpers'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface PortraitInterface {
  timeline: GSAPTimeline
}

export default function Portrait({ timeline }: PortraitInterface) {
  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PORTRAIT)
  portraitMap.magFilter = THREE.NearestFilter

  const portraitMaterial = new THREE.MeshStandardMaterial({
    map: portraitMap,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })

  const portraitGroupRef = useRef<THREE.Group>(null!)
  const portraitMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // POSITION
    timeline.to(
      portraitGroupRef.current.position,
      {
        keyframes: {
          '0%': { y: -1, z: 6 },
          '33%': { y: 0, z: 0 },
          '66%': { y: 0, z: 0 },
          '100%': { y: 0, z: 0 },
          easeEach: 'power2.out',
        },
        duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
      },
      getSceneDelay({
        scenes: heroTimeline,
        sceneName: 'FEDERICO',
        offset: heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
      }) / heroAnimationsConstants.SPEED,
    )

    // ROTATION
    timeline.to(
      portraitGroupRef.current.rotation,
      {
        keyframes: {
          '0%': { z: THREE.MathUtils.degToRad(33) },
          '33%': { z: 0 },
          easeEach: 'power2.out',
        },
        duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
      },
      getSceneDelay({
        scenes: heroTimeline,
        sceneName: 'FEDERICO',
        offset: heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
      }) / heroAnimationsConstants.SPEED,
    )

    // MATERIAL
    timeline.to(
      portraitMeshRef.current.material,
      {
        keyframes: {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          easeEach: 'power1.in',
        },
        duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
      },
      getSceneDelay({
        scenes: heroTimeline,
        sceneName: 'FEDERICO',
        offset: heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
      }) / heroAnimationsConstants.SPEED,
    )
  })

  return (
    <group ref={portraitGroupRef}>
      {/* <HeptagramComponent /> */}
      <Plane
        ref={portraitMeshRef}
        args={[7.5, 7.5]}
        material={portraitMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}
