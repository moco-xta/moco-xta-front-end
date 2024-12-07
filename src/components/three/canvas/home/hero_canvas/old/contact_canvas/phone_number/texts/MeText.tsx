import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function ContactText() {
  const t = useTranslations('HOME')

  const [contactText] = useState<string>(t('HERO.ME').toUpperCase())
  const [contactTextSplitted] = useState<string[]>(contactText.split(''))

  const contactGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  useGSAP(() => {
    const contacLetters = gsap.utils.toArray(contactGroupRef.current.children)
    contacLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.to(letter.position, {
        keyframes: {
          '0%': {
            y: -0.5,
          },
          '33%': {
            y: 0.05,
          },
          easeEach: 'power1.in',
        },
        delay:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY +
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.STAGGER_DELAY * index,
        duration:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS /
          heroAnimationsConstants.SPEED,
      })
      // @ts-ignore
      gsap.to(letter.rotation, {
        keyframes: {
          '0%': {
            x: THREE.MathUtils.degToRad(45),
          },
          '33%': {
            x: THREE.MathUtils.degToRad(0),
          },
          easeEach: 'power1.in',
        },
        delay:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY +
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.STAGGER_DELAY * index,
        duration:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS /
          heroAnimationsConstants.SPEED,
      })
      // @ts-ignore
      gsap.to(letter.material, {
        keyframes: {
          '0%': {
            opacity: 0,
          },
          '33%': {
            opacity: 1,
          },
          '66%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
          easeEach: 'power1.in',
        },
        delay:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.DELAY +
          0.5 +
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.STAGGER_DELAY * index,
        duration:
          heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.CONTACT_ME.STEPS /
          heroAnimationsConstants.SPEED,
      })
    })
  })

  return (
    <Word3D
      ref={contactGroupRef}
      keyPrefix={'contact'}
      font={'fonts/json/Gilroy_Heavy.json'}
      size={1}
      depth={0.1}
      splittedWord={contactTextSplitted}
      position={new THREE.Vector3(0, -0.55, 0)}
      center={true}
      lengthRef={lengthRef}
    >
      <meshStandardMaterial
        color={heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.COLOR}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
