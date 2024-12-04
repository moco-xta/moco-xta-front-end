import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box, Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

// import HeptagramComponent from './HeptagramComponent'
import AlsoKnowAs from '../../aka_moco_canvas/also_know_as/AlsoKnowAs'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

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

  const portraitBoxGroupRef = useRef<THREE.Mesh>(null!)
  // const portraitGroupRef = useRef<THREE.Group>(null!)
  const portraitMeshRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {}, [])

  useGSAP(() => {
    // POSITION
    timeline.to(
      portraitBoxGroupRef.current.position,
      {
        keyframes: {
          '0%': { y: -6, z: 6 },
          '33%': { y: -5, z: 0 },
          easeEach: 'power2.out',
        },
        duration: heroAnimationsConstants.SCENES.FEDERICO.DURATION / heroAnimationsConstants.SPEED,
      },
      getSceneDelay({
        scenes: heroTimeline,
        sceneName: 'FEDERICO',
        offset: heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
      }) / heroAnimationsConstants.SPEED,
    )

    // ROTATION
    timeline.to(
      portraitBoxGroupRef.current.rotation,
      {
        keyframes: {
          '66%': { z: THREE.MathUtils.degToRad(0) },
          '100%': { z: THREE.MathUtils.degToRad(-180) },
          easeEach: 'power2.out',
        },
        duration: heroAnimationsConstants.SCENES.FEDERICO.DURATION / heroAnimationsConstants.SPEED,
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
        duration: heroAnimationsConstants.SCENES.FEDERICO.DURATION / heroAnimationsConstants.SPEED,
      },
      getSceneDelay({
        scenes: heroTimeline,
        sceneName: 'FEDERICO',
        offset: heroAnimationsConstants.SCENES.FEDERICO.OFFSET,
      }) / heroAnimationsConstants.SPEED,
    )
  })

  /* return (
    <group ref={portraitGroupRef} position={new THREE.Vector3(0, -5, 0)}>
      <Plane
        ref={portraitMeshRef}
        args={[7.5, 7.5]}
        material={portraitMaterial}
        receiveShadow
        castShadow
      />
    </group>
  ) */

  return (
    <Box
      ref={portraitBoxGroupRef}
      args={[1, 10, 1]}
      position={[0, -5, 0]}
      material={boxGroupMaterial}
    >
      <AlsoKnowAs />
      <Plane
        ref={portraitMeshRef}
        args={[7.5, 7.5]}
        position={[0, 5, 0]}
        material={portraitMaterial}
        receiveShadow
        castShadow
      />
    </Box>
  )
}
