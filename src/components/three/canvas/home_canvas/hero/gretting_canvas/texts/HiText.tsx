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

interface HiTextInterface {
  timeline: GSAPTimeline
}

export default function HiText({ timeline }: HiTextInterface) {
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
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: {
              '0%': { y: -2.5, z: -2 },
              '100%': { y: 0, z: 0 },
              easeEach: 'none',
            },
            duration:
              heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.DURATION /
              heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.OFFSET,
            stagger: {
              index: index,
              offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.STAGGER.OFFSET,
            },
          }) / heroAnimationsConstants.SPEED,
        )

        // ROTATION
        timeline.to(
          // @ts-ignore
          letter.material,
          {
            keyframes: {
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
              heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.DURATION /
              heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.OFFSET,
            stagger: {
              index: index,
              offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.HI_TEXT.STAGGER.OFFSET,
            },
          }) / heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.SIZES.HI}
      depth={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.DEPTH}
      splittedWord={hiTextSplitted}
      position={
        new THREE.Vector3(
          greetingCanvasConstants.MESHES.HI_TEXT.POSITION.X,
          greetingCanvasConstants.MESHES.HI_TEXT.POSITION.Y,
          greetingCanvasConstants.MESHES.HI_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={hiTextLengthRef}
    >
      {
        <meshStandardMaterial
          color={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.COLOR}
          transparent={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.TRANSPARENT}
          opacity={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.OPACITY}
          // emissive={greetingCanvasConstants.MATERIALS.TEXTS.HI_I_M_FEDERICO.EMISSIVE}
          side={THREE.DoubleSide}
        />
      }
    </Word3D>
  )
}
