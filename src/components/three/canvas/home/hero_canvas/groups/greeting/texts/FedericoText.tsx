import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as federicoTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/texts/federicoTextAnimationsConstants.json'

import { federicoTextAnimations } from 'animations'

export default function FedericoText() {
  const { timeline } = useGSAPTimelineContext()

  const [federicoText] = useState<string>('federico'.toUpperCase())
  const [federicoTextSplitted] = useState<string[]>(federicoText.split(''))

  const federicoTextGroupRef = useRef<THREE.Group>(null!)
  const federicoTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const federicoLetters: THREE.Mesh[] = gsap.utils.toArray(
        federicoTextGroupRef.current.children,
      )
      federicoLetters.forEach((letter, index) => {
        const animations = federicoTextAnimations(
          federicoTextGroupRef.current,
          federicoTextLengthRef.current,
          index,
        )
        timeline
          .to(
            // POSITION
            letter.position,
            {
              keyframes: animations.position.keyframes,
              duration: animations.duration,
            },
            animations.delay,
          )
          // MATERIAL
          .to(
            letter.material,
            {
              keyframes: animations.rotation.keyframes,
              duration: animations.duration,
            },
            animations.delay,
          )
      })
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
        opacity={federicoTextAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY}
        // opacity={1}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
