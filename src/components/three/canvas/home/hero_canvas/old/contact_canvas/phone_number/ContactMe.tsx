import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import ContactText from './texts/ContactText'
import MeText from './texts/MeText'
import { IphoneKeyboard } from './IphoneKeyboard'

/* import { default as heroConstants } from '@/constants/animations/heroConstants.json' */

export default function ContactMe() {
  const contactMeGroupRef = useRef<THREE.Group>(null!)
  const iphoneKeyboardGroupRef = useRef<THREE.Group>(null!)

  /* useGSAP(() => {
    gsap.to(contactMeGroupRef.current.position, {
      keyframes: {
        '0%': {
          z: -7,
          ease: 'power1.out',
        },
        '33%': {
          z: 3,
          ease: 'circ.inOut',
        },
        '66%': {
          z: 0,
        },
      },
      delay: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY,
      duration: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS / heroConstants.SPEED,
    })
    gsap.to(contactMeGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          z: THREE.MathUtils.degToRad(0),
        },
        '33%': {
          z: THREE.MathUtils.degToRad(-15),
        },
        '66%': {
          z: THREE.MathUtils.degToRad(15),
        },
        '100%': {
          z: THREE.MathUtils.degToRad(-180),
          ease: 'circ.inOut',
        },
      },
      delay: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY,
      duration: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS / heroConstants.SPEED,
    })
    const iphoneKeyboardTouchs = gsap.utils.toArray(iphoneKeyboardGroupRef.current.children)
    iphoneKeyboardTouchs.forEach((touch, index) => {
      // @ts-ignore
      gsap.to(touch.material, {
        keyframes: {
          '0%': {
            opacity: 0,
            ease: 'power2.out',
          },
          '33%': {
            opacity: 1,
          },
          '85%': {
            opacity: 1,
            ease: 'power4.in',
          },
          '100%': {
            opacity: 0,
          },
        },
        delay: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY,
        duration: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS / heroConstants.SPEED,
      })
    })
    gsap.to(contactMeGroupRef.current, {
      keyframes: {
        '0%': {
          visible: true,
        },
        '100%': {
          visible: false,
        },
      },
      delay: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY,
      duration: heroConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS / heroConstants.SPEED,
    })
  }) */

  return (
    <group
      ref={contactMeGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <group position={new THREE.Vector3(0, 0, -0.1)}>
        <ContactText />
        <MeText />
      </group>
      <IphoneKeyboard ref={iphoneKeyboardGroupRef} />
    </group>
  )
}
