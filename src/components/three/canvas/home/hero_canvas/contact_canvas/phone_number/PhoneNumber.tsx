import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import PhoneNumberText from './PhoneNumberText'
import PhoneNumberInputComponent from './PhoneNumberInputComponent'
import { IphoneKeyboard } from './IphoneKeyboard'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function PhoneNumber() {
  const phoneNumberGroupRef = useRef<THREE.Group>(null!)
  const phoneNumberWithInputGroupRef = useRef<THREE.Group>(null!)
  const iphoneKeyboardGroupRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    gsap.to(phoneNumberWithInputGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          z: THREE.MathUtils.degToRad(120),
          ease: 'circ.in',
        },
        '50%': {
          z: THREE.MathUtils.degToRad(-5),
          ease: 'circ.out',
        },
        '100%': {
          z: THREE.MathUtils.degToRad(-5),
        },
      },
      delay:
        (heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY + 0.05) /
        heroAnimationsConstants.SPEED,
      duration:
        heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.STEPS /
        heroAnimationsConstants.SPEED,
    })
    gsap.to(iphoneKeyboardGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          z: THREE.MathUtils.degToRad(240),
        },
        '50%': {
          z: THREE.MathUtils.degToRad(0),
        },
        '100%': {
          z: THREE.MathUtils.degToRad(-10),
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
    const iphoneKeyboardTouchs = gsap.utils.toArray(iphoneKeyboardGroupRef.current.children)
    iphoneKeyboardTouchs.forEach((touch, index) => {
      // @ts-ignore
      gsap.to(touch.material, {
        keyframes: {
          '0%': {
            opacity: 0,
            ease: 'power4.in',
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 1,
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
    gsap.to(phoneNumberGroupRef.current, {
      keyframes: {
        '0%': {
          visible: true,
        },
        '100%': {
          visible: false,
        },
      },
      delay: heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY,
      duration:
        heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS /
        heroAnimationsConstants.SPEED,
    })
  })

  return (
    <group ref={phoneNumberGroupRef}>
      <group ref={phoneNumberWithInputGroupRef}>
        <PhoneNumberText />
        <PhoneNumberInputComponent />
      </group>
      <IphoneKeyboard ref={iphoneKeyboardGroupRef} />
    </group>
  )
}