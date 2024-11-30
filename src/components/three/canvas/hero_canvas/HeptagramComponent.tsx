import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Heptagram } from '../../models/home/Heptagram'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function HeptagramComponent() {
  const heptagramRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    gsap.to(heptagramRef.current.rotation, {
      keyframes: {
        '0%': { z: THREE.MathUtils.degToRad(360 / 7) },
        '60%': { z: THREE.MathUtils.degToRad(360 / 7) },
        '100%': { z: THREE.MathUtils.degToRad(0) },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    /* gsap.to(heptagramRef.current.material, {
      keyframes: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    }) */
  })

  useEffect(() => {
    console.log('heptagramRef', heptagramRef.current)
  }, [heptagramRef])

  return (
    <Heptagram
      ref={heptagramRef}
      position={new THREE.Vector3(0, 1, -1)}
      scale={2.5}
    />
  )
}
