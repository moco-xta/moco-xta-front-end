import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function BackgroundColor() {
  const backgroundColorRef = useRef<THREE.Color>(new THREE.Color(0, 0, 0))

  /* useGSAP(() => {
    gsap.to(backgroundColorRef.current, {
      keyframes: {
        '0%': { r: 1, g: 0, b: 0 },
        '60%': { r: 0, g: 0, b: 1 },
        '100%': { r: 0, g: 1, b: 0 },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
  })

  useFrame((state, delta, xrFrame) => {
    state.scene.background = backgroundColorRef.current
  }) */

  return null
}
