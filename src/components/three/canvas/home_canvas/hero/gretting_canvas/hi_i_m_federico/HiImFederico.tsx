import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import HiText from '../texts/HiText'
import ImText from '../texts/ImText'
import FedericoText from '../texts/FedericoText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function HiImFederico() {
  const hiImFedericoSceneGroupRef = useRef<THREE.Group>(null!)
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  useGSAP(
    () => {
      // POSITION
      box3Ref.current.setFromObject(hiImFedericoSceneGroupRef.current)
      gsap.to(hiImFedericoSceneGroupRef.current.position, {
        keyframes: {
          '0%': { x: 3, y: -0.5, z: 4, ease: 'back.in' },
          '20%': { x: 2, y: -1, z: 4, ease: 'back.in' },
          '40%': { x: -0.25, y: -0.7, z: 4, ease: 'back.in' },
          '60%': { x: 0, y: 1.3, z: 5, ease: 'back.in' },
          '80%': { x: 0, y: 0, z: 0, ease: 'back.in' },
          '100%': { x: 0, y: 0, z: -3, ease: 'power1.in' },
          easeEach: 'power1.in',
        },
        delay: heroAnimationsConstants.SCENES.GREETING.DELAY / heroAnimationsConstants.SPEED,
        duration: heroAnimationsConstants.SCENES.GREETING.STEPS / heroAnimationsConstants.SPEED,
        /* onComplete: () => {
          hiImFedericoSceneGroupRef.current.visible = false
        }, */
      })

      // ROTATION
      gsap.to(hiImFedericoSceneGroupRef.current.rotation, {
        keyframes: {
          '0%': { x: THREE.MathUtils.degToRad(-60), y: 0, ease: 'back.in' }, // HI
          '20%': { x: THREE.MathUtils.degToRad(-15), y: 0, ease: 'back.in' }, // I_M
          '40%': {
            x: THREE.MathUtils.degToRad(-15),
            y: THREE.MathUtils.degToRad(-30),
            ease: 'back.in',
          }, // FEDERICO
          '60%': { x: THREE.MathUtils.degToRad(15), y: 0, ease: 'back.in' }, // > ALL
          '100%': { x: THREE.MathUtils.degToRad(0), y: 0, ease: 'back.in' }, // > FADE OUT
          easeEach: 'none',
        },
        delay: heroAnimationsConstants.SCENES.GREETING.DELAY / heroAnimationsConstants.SPEED,
        duration: heroAnimationsConstants.SCENES.GREETING.STEPS / heroAnimationsConstants.SPEED,
      })
    },
    { scope: hiImFedericoSceneGroupRef },
  )
  return (
    <group ref={hiImFedericoSceneGroupRef}>
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}
