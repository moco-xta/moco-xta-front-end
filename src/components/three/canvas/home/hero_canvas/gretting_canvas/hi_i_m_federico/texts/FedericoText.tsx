import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from '../../../../../../components/word_3d/Word3D'

import { getRandomInt } from '@/helpers/animationHelpers'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface FedericoTextInterface {
  timeline: GSAPTimeline
}

export default function FedericoText({ timeline }: FedericoTextInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

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
                x: getRandomInt({
                  min: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .POSITION['0_PERCENT'].X.MIN,
                  max: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .POSITION['0_PERCENT'].X.MAX,
                  decimal:
                    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                      .POSITION['0_PERCENT'].X.DECIMAL,
                }),
                z: getRandomInt({
                  min: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .POSITION['0_PERCENT'].Z.MIN,
                  max: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .POSITION['0_PERCENT'].Z.MAX,
                  decimal:
                    heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                      .POSITION['0_PERCENT'].Z.DECIMAL,
                }),
              },
              '100%': {
                x:
                  federicoTextGroupRef.current.position.x +
                  federicoTextLengthRef.current.slice(0, index).reduce((a, b) => a + b, 0),
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                  .POSITION['100_PERCENT'].Z,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION.STAGGER) /
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
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .MATERIAL['50_PERCENT'].OPACITY,
              },
              '100%': {
                opacity:
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                    .MATERIAL['100_PERCENT'].OPACITY,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION
                  .MATERIAL['100_PERCENT'].EASE,
              },
              easeEach:
                heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL
                  .EACH_EASE,
            },
            duration: duration,
          },
          delay +
            (index *
              heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.SUBS.FEDERICO_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: federicoTextGroupRef },
  )

  return (
    <Word3D
      ref={federicoTextGroupRef}
      keyPrefix={'federico_text'}
      font={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.FEDERICO}
      depth={greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={federicoTextSplitted}
      position={
        new THREE.Vector3(
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.X,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.Y,
          greetingCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={federicoTextLengthRef}
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
