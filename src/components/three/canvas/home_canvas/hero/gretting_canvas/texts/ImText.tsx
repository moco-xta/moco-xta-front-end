import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import { Word3D } from '../../../components/word_3d/Word3D'

import { getSceneDelay } from '@/helpers/animationHelpers'

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
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: {
              '0%': { x: -2.5, z: -2.5 * index },
              '100%': {
                x: imTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0),
                z: 0,
              },
              easeEach: 'none',
            },
            duration:
              heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.DURATION /
              heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.OFFSET,
            stagger: {
              index: index,
              offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.STAGGER.OFFSET,
            },
          }) / heroAnimationsConstants.SPEED,
        )

        // ROTATION
        timeline.to(
          // @ts-ignore
          letter.material,
          {
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
            duration:
              heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.DURATION /
              heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.OFFSET,
            stagger: {
              index: index,
              offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.I_M_TEXT.STAGGER.OFFSET,
            },
          }) / heroAnimationsConstants.SPEED,
        )
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
          greetingCanvasConstants.MESHES.I_M_TEXT.POSITION.X,
          greetingCanvasConstants.MESHES.I_M_TEXT.POSITION.Y,
          greetingCanvasConstants.MESHES.I_M_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.COLOR}
        transparent={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.TRANSPARENT}
        opacity={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.OPACITY}
        // emissive={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
