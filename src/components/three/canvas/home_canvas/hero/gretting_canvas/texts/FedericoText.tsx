import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../components/word_3d/Word3D'

import { getRandomInt } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function FedericoText() {
  const t = useTranslations('HOME')

  const [federicoText] = useState<string>('federico'.toUpperCase())
  const [federicoTextSplitted] = useState<string[]>(federicoText.split(''))

  const federicoTextGroupRef = useRef<THREE.Group>(null!)
  const federicoTextLengthRef = useRef<number[]>([])
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')

  useGSAP(
    () => {
      const federicoLetters = gsap.utils.toArray(federicoTextGroupRef.current.children)
      federicoLetters.forEach((letter, index) => {
        // POSITION
        // @ts-ignore
        gsap.from(letter.position, {
          keyframes: {
            '0%': {
              x: getRandomInt({ min: 0, max: 20, decimal: 0.25 }),
              z: getRandomInt({ min: 0, max: 20, decimal: 0.25 }),
            },
            '100%': {
              x:
                federicoTextGroupRef.current.position.x +
                federicoTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0),
              z: 0,
            },
            delay: getRandomInt({ min: 0, max: 20 }) / 5 + index * 0.25,
            easeEach: 'power1.in',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY + 2 + 0.085 * index) /
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
              opacity: 1,
              ease: 'power1.in',
            },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY + 2 + 0.085 * index) /
            heroAnimationsConstants.SPEED,
          duration: 1 / heroAnimationsConstants.SPEED,
        })
      })
    },
    { scope: federicoTextGroupRef },
  )

  return (
    <Word3D
      ref={federicoTextGroupRef}
      keyPrefix={'federico_text'}
      font={heroAnimationsConstants.SCENES.GREETING.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.GREETING.TEXTS.SIZES.FEDERICO}
      depth={heroAnimationsConstants.SCENES.GREETING.TEXTS.DEPTH}
      splittedWord={federicoTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.GREETING.FEDERICO.POSITION.X,
          heroAnimationsConstants.SCENES.GREETING.FEDERICO.POSITION.Y,
          heroAnimationsConstants.SCENES.GREETING.FEDERICO.POSITION.Z,
        )
      }
      center={true}
      lengthRef={federicoTextLengthRef}
    >
      <meshStandardMaterial
        color={'#dcff00'}
        transparent
        opacity={0}
        // emissive={'#dcff00'}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
