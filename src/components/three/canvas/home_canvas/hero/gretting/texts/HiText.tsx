import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function HiText() {
  const t = useTranslations('HOME')

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiTextGroupRef = useRef<THREE.Group>(null!)
  const hiTextLengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')

  useGSAP(
    () => {
      const hiLetters = gsap.utils.toArray(hiTextGroupRef.current.children)
      hiLetters.forEach((letter, index) => {
        // POSITION
        // @ts-ignore
        gsap.from(letter.position, {
          keyframes: {
            '0%': { y: -5.5, z: -2 },
            '100%': { y: 0, z: 0 },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY - 0 + 0.125 * index) /
            heroAnimationsConstants.SPEED,
          duration: 1 / heroAnimationsConstants.SPEED,
        })

        // ROTATION
        // @ts-ignore
        gsap.from(letter.material, {
          keyframes: {
            '0%': {
              opacity: 0,
            },
            '50%': {
              opacity: 0,
            },
            '100%': {
              opacity: 1, ease: 'power1.in',
            },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY - 0 + 0.125 * index) /
            heroAnimationsConstants.SPEED,
          duration: 1 / heroAnimationsConstants.SPEED,
        })
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={heroAnimationsConstants.SCENES.GREETING.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.GREETING.TEXTS.SIZES.HI}
      depth={heroAnimationsConstants.SCENES.GREETING.TEXTS.DEPTH}
      splittedWord={hiTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.GREETING.HI.POSITION.X,
          heroAnimationsConstants.SCENES.GREETING.HI.POSITION.Y,
          heroAnimationsConstants.SCENES.GREETING.HI.POSITION.Z,
        )
      }
      center={true}
      lengthRef={hiTextLengthRef}
    >
      <meshStandardMaterial
        color={'#dcff00'}
        transparent
        opacity={0}
        emissive={'#dcff00'}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
