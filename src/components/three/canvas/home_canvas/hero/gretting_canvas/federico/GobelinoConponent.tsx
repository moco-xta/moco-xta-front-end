import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Gobelino } from '@/components/three/models/home/Gobelino'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function GobelinoConponent() {
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
      gsap.to(gobelinoGroupRef.current.position, {
        keyframes: {
          '0%': { y: -4 },
          '33%': { y: 0 },
          easeEach: 'power2.out',
        },
        delay:
          (heroAnimationsConstants.SCENES.GREETING.DELAY +
            heroAnimationsConstants.SCENES.GREETING.STEPS +
            heroAnimationsConstants.SCENES.FEDERICO.OFFSET +
            1) /
          heroAnimationsConstants.SPEED,
        duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
      })
      /* gsap.to(gobelinoGroupRef.current.rotation, {
      keyframes: {
        '0%': { z: THREE.MathUtils.degToRad(33) },
        '33%': { z: 0 },
        easeEach: 'power2.out',
      },
      delay:
        (heroAnimationsConstants.SCENES.GREETING.DELAY +
          heroAnimationsConstants.SCENES.GREETING.STEPS +
          heroAnimationsConstants.SCENES.FEDERICO.OFFSET) /
        heroAnimationsConstants.SPEED,
      duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
    }) */
      const gobelinoMeshes = gsap.utils.toArray(gobelinoMeshesGroupRef.current.children)
      gobelinoMeshes.forEach((child, index) => {
        // ROTATION
        // @ts-ignore
        gsap.to(child.material, {
          keyframes: {
            '33%': {
              opacity: 0,
            },
            '66%': {
              opacity: 1,
              ease: 'power1.in',
            },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY +
              heroAnimationsConstants.SCENES.GREETING.STEPS +
              heroAnimationsConstants.SCENES.FEDERICO.OFFSET) /
            heroAnimationsConstants.SPEED,
          duration: heroAnimationsConstants.SCENES.FEDERICO.STEPS / heroAnimationsConstants.SPEED,
        })
      })
    },
    { scope: gobelinoGroupRef },
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
