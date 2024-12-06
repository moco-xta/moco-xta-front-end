import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { PhoneNumberInput } from '@/components/three/models/home/PhoneNumberInput'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function PhoneNumberInputComponent() {
  const phoneNumberInputRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    gsap.to(phoneNumberInputRef.current.material, {
      keyframes: {
        '0%': {
          opacity: 0,
        },
        '50%': {
          opacity: 1,
        },
        '100%': {
          opacity: 1,
          ease: 'circ.inOut',
        },
      },
      delay:
        heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY /
        heroAnimationsConstants.SPEED,
      duration:
        heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.STEPS /
        heroAnimationsConstants.SPEED,
    })
  })

  return (
    <PhoneNumberInput
      ref={phoneNumberInputRef}
      position={new THREE.Vector3(0, 0, -0.01)}
      scale={0.6}
    />
  )
}
