import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../../components/word_3d/Word3D'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface ImTextInterface {
  timeline: GSAPTimeline
}

export default function ImText({ timeline }: ImTextInterface) {
  const t = useTranslations('HOME')

  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

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
              '0%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.POSITION[
                  '0_PERCENT'
                ].X,
                z:
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.POSITION[
                    '0_PERCENT'
                  ].Z * index,
              },
              '100%': {
                x: imTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0),
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.POSITION[
                  '100_PERCENT'
                ].X,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.MATERIAL
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )

        // MATERIAL
        timeline.to(
          // @ts-ignore
          letter.material,
          {
            keyframes: {
              '50%': {
                opacity:
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.MATERIAL[
                    '50_PERCENT'
                  ].OPACITY,
              },
              '100%': {
                opacity:
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.MATERIAL[
                    '100_PERCENT'
                  ].OPACITY,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION
                  .MATERIAL['100_PERCENT'].EASE,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.MATERIAL
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.I_M_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: imTextGroupRef },
  )

  return (
    <Word3D
      ref={imTextGroupRef}
      keyPrefix={'i_m_text'}
      font={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.I_M}
      depth={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={imTextSplitted}
      position={
        new THREE.Vector3(
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.X,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.Y,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.COLOR}
        transparent={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.TRANSPARENT}
        opacity={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.OPACITY}
        // emissive={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.MATERIALS.TEXTS.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
