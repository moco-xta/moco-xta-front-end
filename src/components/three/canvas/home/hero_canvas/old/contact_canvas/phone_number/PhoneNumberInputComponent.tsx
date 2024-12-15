import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { PhoneNumberInput } from '@/components/three/models/home/PhoneNumberInput'

/* import { default as heroConstants } from '@/constants/animations/heroConstants.json' */

export default function PhoneNumberInputComponent() {
  const phoneNumberInputRef = useRef<THREE.Mesh>(null!)

  /* useGSAP(() => {
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
      delay: heroConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY / heroConstants.SPEED,
      duration: heroConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.STEPS / heroConstants.SPEED,
    })
  }) */

  return (
    <PhoneNumberInput
      ref={phoneNumberInputRef}
      position={new THREE.Vector3(0, 0, -0.01)}
      scale={0.6}
    />
  )
}
