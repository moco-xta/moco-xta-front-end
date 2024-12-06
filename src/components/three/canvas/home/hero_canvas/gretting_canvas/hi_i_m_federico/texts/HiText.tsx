import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../../../../components/word_3d/Word3D'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface HiTextInterface {
  timeline: GSAPTimeline
}

export default function HiText({ timeline }: HiTextInterface) {
  const t = useTranslations('HOME')

  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

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
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: {
              '0%': {
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.POSITION[
                  '0_PERCENT'
                ].Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.POSITION[
                  '0_PERCENT'
                ].Z,
              },
              '100%': {
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.POSITION[
                  '100_PERCENT'
                ].Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.POSITION[
                  '100_PERCENT'
                ].Z,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.POSITION
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.STAGGER) /
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
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.MATERIAL[
                    '50_PERCENT'
                  ].OPACITY,
              },
              '100%': {
                opacity:
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.MATERIAL[
                    '100_PERCENT'
                  ].OPACITY,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION
                  .MATERIAL['100_PERCENT'].EASE,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.MATERIAL
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.HI_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.HI}
      depth={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={hiTextSplitted}
      position={
        new THREE.Vector3(
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.X,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.Y,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={hiTextLengthRef}
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
