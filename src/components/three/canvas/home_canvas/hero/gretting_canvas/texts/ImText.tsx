import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function ImText() {
  const t = useTranslations('HOME')

  const [imText] = useState<string>(t('HERO.I_M').toUpperCase())
  const [imTextSplitted] = useState<string[]>(imText.split(''))

  const imTextGroupRef = useRef<THREE.Group>(null!)
  const imTextLengthRef = useRef<number[]>([])
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')

  useGSAP(
    () => {
      const imLetters = gsap.utils.toArray(imTextGroupRef.current.children)
      imLetters.forEach((letter, index) => {
        // POSITION
        // @ts-ignore
        gsap.from(letter.position, {
          keyframes: {
            '0%': { x: -2.5, z: -2.5 * index },
            '100%': { x: imTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0), z: 0 },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.SCENES.GREETING.DELAY + 1 + 0.125 * index) /
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
            (heroAnimationsConstants.SCENES.GREETING.DELAY + 1 + 0.125 * index) /
            heroAnimationsConstants.SPEED,
          duration: 1 / heroAnimationsConstants.SPEED,
        })
      })
    },
    { scope: imTextGroupRef },
  )

  return (
    <Word3D
      ref={imTextGroupRef}
      keyPrefix={'i_m_text'}
      font={heroAnimationsConstants.SCENES.GREETING.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.GREETING.TEXTS.SIZES.I_M}
      depth={heroAnimationsConstants.SCENES.GREETING.TEXTS.DEPTH}
      splittedWord={imTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.GREETING.I_M.POSITION.X,
          heroAnimationsConstants.SCENES.GREETING.I_M.POSITION.Y,
          heroAnimationsConstants.SCENES.GREETING.I_M.POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
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
