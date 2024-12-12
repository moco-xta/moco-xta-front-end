import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingAnimationsConstants.json'
import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as federicoTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/federicoTextAnimationsConstants.json'

import { federicoTextPositionAnimation, imTextMaterialAnimation } from 'animations'

interface FedericoTextInterface {
  timeline: GSAPTimeline
}

export default function FedericoText({ timeline }: FedericoTextInterface) {
  const [duration] = useState<number>(
    federicoTextAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    federicoTextAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const [federicoText] = useState<string>('federico'.toUpperCase())
  const [federicoTextSplitted] = useState<string[]>(federicoText.split(''))

  const federicoTextGroupRef = useRef<THREE.Group>(null!)
  const federicoTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      if (!greetingAnimationsConstants.PAUSED && !federicoTextAnimationsConstants.PAUSED) {
        const federicoLetters = gsap.utils.toArray(federicoTextGroupRef.current.children)
        federicoLetters.forEach((letter, index) => {
          // POSITION
          timeline
            .to(
              // @ts-ignore
              letter.position,
              {
                keyframes: federicoTextPositionAnimation(
                  federicoTextGroupRef.current,
                  federicoTextLengthRef.current,
                  index,
                ),
                duration: duration,
              },
              delay +
                (index * federicoTextAnimationsConstants.ANIMATION.STAGGER) /
                  heroAnimationsConstants.SPEED,
            )
            // MATERIAL
            .to(
              // @ts-ignore
              letter.material,
              {
                keyframes: imTextMaterialAnimation.keyframes,
                duration: duration,
              },
              delay +
                (index * federicoTextAnimationsConstants.ANIMATION.STAGGER) /
                  heroAnimationsConstants.SPEED,
            )
        })
      }
    },
    { scope: federicoTextGroupRef },
  )

  return (
    <Word3D
      ref={federicoTextGroupRef}
      keyPrefix={'federico_text'}
      font={greetingTextsAnimationsConstants.GEOMETRY.FONT}
      size={greetingTextsAnimationsConstants.GEOMETRY.SIZES.FEDERICO_TEXT}
      depth={greetingTextsAnimationsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          federicoTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          federicoTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          federicoTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      splittedWord={federicoTextSplitted}
      lengthRef={federicoTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsAnimationsConstants.MATERIAL.COLOR}
        transparent={greetingTextsAnimationsConstants.MATERIAL.TRANSPARENT}
        opacity={
          !greetingAnimationsConstants.PAUSED && !federicoTextAnimationsConstants.PAUSED
            ? federicoTextAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
            : 1
        }
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
