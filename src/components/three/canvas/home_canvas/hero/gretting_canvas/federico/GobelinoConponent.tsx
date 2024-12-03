import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Gobelino } from '@/components/three/models/home/Gobelino'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import { getDelay, getSceneDelay } from '@/helpers/animationHelpers'
import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

interface GobelinoConponentInterface {
  timeline: GSAPTimeline
}

export default function GobelinoConponent({ timeline }: GobelinoConponentInterface) {
  const gobelinotMap = new THREE.TextureLoader().load(texturesConstants.HOME.GOBELINO)
  gobelinotMap.magFilter = THREE.NearestFilter

  const gobelinotMaterial = new THREE.MeshStandardMaterial({
    map: gobelinotMap,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })

  const gobelinoGroupRef = useRef<THREE.Group>(null!)
  const gobelinoMeshesGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        gobelinoGroupRef.current.position,
        {
          keyframes: {
            '0%': { y: -4 },
            '33%': { y: 0 },
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
      /* timeline.to(
        gobelinoGroupRef.current.rotation,
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
      ) */

      const gobelinoMeshes = gsap.utils.toArray(gobelinoMeshesGroupRef.current.children)
      gobelinoMeshes.forEach((child, index) => {
        // MATERIALS
        timeline.to(
          // @ts-ignore
          child.material,
          {
            keyframes: {
              '0%': {
                opacity: 0,
              },
              '33%': {
                opacity: 1,
                ease: 'power1.in',
              },
              easeEach: 'none',
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
    },
    /* { scope: gobelinoGroupRef }, */
  )

  return (
    <group
      ref={gobelinoGroupRef}
      position={new THREE.Vector3(0, -4, -2)}
    >
      <Gobelino ref={gobelinoMeshesGroupRef} />
      {/* <Plane
        ref={gobelinoMeshRef}
        args={[10, 10]}
        material={gobelinotMaterial}
      /> */}
    </group>
  )
}
