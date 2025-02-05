import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { PhoneNumberInput } from '@/components/three/models/contact/PhoneNumberInput'

import { getPhoneNumberInputAnimationsData } from '@/data/contact/three/phone_number/phoneNumberInputData'

import { animate } from '@/animation/index'

export default function PhoneNumberInputComponent() {
  const { timeline } = useGSAPTimelineContext()

  const phoneNumberInputRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: phoneNumberInputRef.current,
        animationsData: getPhoneNumberInputAnimationsData(),
      })
    },
    { scope: phoneNumberInputRef },
  )

  return (
    <PhoneNumberInput
      ref={phoneNumberInputRef}
      position={new THREE.Vector3(0, 0, -0.01)}
      scale={0.6}
    />
  )
}
