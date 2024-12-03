import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { heroTimeline } from '@/data/animations/timelines/heroTimeline'

import { Word3D } from '../../../components/word_3d/Word3D'

import { getRandomInt, getSceneDelay } from '@/helpers/animationHelpers'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface FedericoTextInterface {
  timeline: GSAPTimeline
}

export default function FedericoText({ timeline }: FedericoTextInterface) {
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
        timeline.to(
          // @ts-ignore
          letter.position,
          {
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
            duration: 1 / heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.OFFSET,
            stagger: {
              index: index,
              offset:
                heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.STAGGER.OFFSET,
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
            duration: 1 / heroAnimationsConstants.SPEED,
          },
          getSceneDelay({
            scenes: heroTimeline,
            sceneName: 'HI_I_M_FEDERICO',
            offset: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.OFFSET,
            stagger: {
              index: index,
              offset:
                heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.STAGGER.OFFSET,
            },
          }) / heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: federicoTextGroupRef },
  )

  return (
    <Word3D
      ref={federicoTextGroupRef}
      keyPrefix={'federico_text'}
      font={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.SIZES.FEDERICO}
      depth={heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.TEXTS.DEPTH}
      splittedWord={federicoTextSplitted}
      position={
        new THREE.Vector3(
          greetingCanvasConstants.MESHES.FEDERICO_TEXT.POSITION.X,
          greetingCanvasConstants.MESHES.FEDERICO_TEXT.POSITION.Y,
          greetingCanvasConstants.MESHES.FEDERICO_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={federicoTextLengthRef}
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
