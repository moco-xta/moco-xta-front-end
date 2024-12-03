import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import { Word3D } from '../../../components/word_3d/Word3D'

import { getDelay } from '@/helpers/animationHelpers'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface ImTextInterface {
  timeline: GSAPTimeline
}

export default function ImText({ timeline }: ImTextInterface) {
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
        timeline.to(letter.position, {
          keyframes: {
            '0%': { x: -2.5, z: -2.5 * index },
            '100%': { x: imTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0), z: 0 },
            easeEach: 'none',
          },
          delay:
            (heroAnimationsConstants.DELAY +
              getDelay('HI_I_M_FEDERICO', heroTimeline) +
              1 +
              0.125 * index) /
            heroAnimationsConstants.SPEED,
          duration: 1 / heroAnimationsConstants.SPEED,
        })

        // ROTATION
        // @ts-ignore
        timeline.to(letter.material, {
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
            (heroAnimationsConstants.DELAY +
              getDelay('HI_I_M_FEDERICO', heroTimeline) +
              1 +
              0.125 * index) /
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
      font={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.SIZES.I_M}
      depth={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.DEPTH}
      splittedWord={imTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M.POSITION.X,
          heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M.POSITION.Y,
          heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M.POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingCanvasConstants.MATERIALS.TEXTS.COLOR}
        transparent={greetingCanvasConstants.MATERIALS.TEXTS.TRANSPARENT}
        opacity={greetingCanvasConstants.MATERIALS.TEXTS.OPACITY}
        // emissive={greetingCanvasConstants.MATERIALS.TEXTS.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
