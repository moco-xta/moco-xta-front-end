import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from '../../../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function PhoneNumberText() {
  const [phoneNumberTextSplitted] = useState<string[]>('(+33) 6 15 90 82 75'.split(''))

  const phoneNumberGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])

  useGSAP(() => {
    const phoneNumberLetters = gsap.utils.toArray(phoneNumberGroupRef.current.children)
    phoneNumberLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.to(letter.position, {
        keyframes: {
          '0%': {
            y: -0.5,
          },
          '50%': {
            y: 0.05,
          },
          easeEach: 'power1.in',
        },
        delay:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY +
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.STAGGER_DELAY * index,
        duration:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.STEPS /
          heroAnimationsConstants.SPEED,
      })
      // @ts-ignore
      gsap.to(letter.material, {
        keyframes: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          easeEach: 'power1.in',
        },
        delay:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.DELAY +
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.STAGGER_DELAY * index,
        duration:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.PHONE_NUMBER.STEPS /
          heroAnimationsConstants.SPEED,
      })
    })
  })

  return (
    <Word3D
      ref={phoneNumberGroupRef}
      keyPrefix={'phone_number'}
      font={'fonts/json/Gilroy_Heavy.json'}
      size={0.5}
      depth={0.1}
      spaceWidth={0.1}
      splittedWord={phoneNumberTextSplitted}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
      lengthRef={lengthRef}
    >
      <meshStandardMaterial
        color={'#000'}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
